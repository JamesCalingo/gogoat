package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
	"strings"
	"time"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

// Get list of all predictions for a station
func (s *Station) getPredictions() []models.Prediction {
	var predictions models.Predictions

	url := fmt.Sprintf("https://api-v3.mbta.com/predictions?sort=departure_time&filter[stop]=%s&filter[route]=%s&filter[revenue]=REVENUE", s.ID, s.Line)
	res, err := http.Get(url)
	checkError(err)
	defer res.Body.Close()
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)

	//Some predictions don't have a specified departure time, so we should probably filter them out
	filter := func(predictions models.Predictions) []models.Prediction {
		var filtered []models.Prediction
		for _, prediction := range predictions.Predictions {
			if contains(subwayLines, prediction.Relationships.Route.Data.ID) && !prediction.Attributes.DepartureTime.IsZero() {
				filtered = append(filtered, prediction)
			}
		}
		return filtered
	}
	return filter(predictions)
}

// Creates a list of future departures from a station in both directions
func (s *Station) listNext() string {
	if s.Line == "Green" {
		return "Please specify which branch you're looking for."
	}
	if s.checkForTransfer() {
		return "This is a transfer station. Please specify a line for data."
	}
	if s.Line == "" {
		return "*This feature is still under construction.*"
	}
	predictions := s.getPredictions()
	var next0 []models.Prediction
	var next1 []models.Prediction
	for _, prediction := range predictions {
		if prediction.Attributes.DirectionID == 0 {
			next0 = append(next0, prediction)
		} else {
			next1 = append(next1, prediction)
		}
	}

	if !s.checkForStation() {
		return "Station not found. Check your station name and try again."
	}

	if len(next0) == 0 && len(next1) == 0 {
		output := "I couldn't find any trains for that station."
		if time.Now().Hour() < 4 {
			return fmt.Sprintf("%s Based on the current time, the line may not be running right now.", output)
		}
		alerts := s.getCurrentAlerts()
		if alerts == "" {
			return fmt.Sprintf("%s There don't seem to be any service alerts, so this may be a technical issue.", output)
		}
		return fmt.Sprintf("%s\nThere is at least one alert that may be affecting service right now:\n%s", output, alerts)
	}
	// Turn lists of times into single string so they can be broadcast
	listTimes := func(destination string, predictions []models.Prediction) string {
		//For terminal stations
		if destination == "" {
			return destination
		}
		output := fmt.Sprintf("**To %s:**\n", strings.ToUpper(destination))
		if len(predictions) == 0 {
			output += "No trains found.\n\n"
		}
		for _, prediction := range predictions {
			output += fmt.Sprintf("%s\n", prediction.Attributes.DepartureTime.Format(time.Kitchen))
		}
		return output
	}

	if len(next0) == 0 {
		return fmt.Sprintf("Next trains from %s:\n\n%s", s.Name, listTimes(s.Destination1, next1))
	}
	return fmt.Sprintf("Next trains from %s:\n\n%s\n%s", s.Name, listTimes(s.Destination0, next0), listTimes(s.Destination1, next1))

}

// Predict the next train from a given station to the terminus of the line
func (s *Station) predictDestination(destination string) string {
	if !s.checkForStation() {
		return "Station not found. Check it and try again."
	}
	if s.checkForTransfer() {
		return "This is a transfer station. Please specify a line for data."
	}
	if s.Line == "Green" {
		return "Please specify which branch you're looking for."
	}
	if s.Line == "" {
		return "This feature is still under construction."
	}
	//This allows the user to use a direction instead of the destination if they so choose
	acceptedDirections := []string{"east", "west", "north", "south"}
	if contains(acceptedDirections, destination) {
		return s.predictDirection(destination)
	}

	destinations := []string{strings.ToLower(s.Destination0), strings.ToLower(s.Destination1)}
	// For southbound Red Line trains. There is a way to get the exact destination, but that's under construction for now
	if s.Destination0 == "Ashmont/Braintree" {
		destinations = append(destinations, "ashmont", "braintree")
	}
	// Boston College and Heath Street have alternate names, so we need to be able to check those as well
	if s.Destination0 == "Boston College" || s.Destination0 == "Heath Street" {
		destinationStat := findStation(destination)
		for _, altName := range destinationStat.AltName {
			lowercased := strings.ToLower(altName)
			destinations = append(destinations, lowercased)
		}
	}
	if !contains(destinations, strings.ToLower(destination)) {
		return "Cannot currently predict next train for this trip. Try again."
	}
	predictions := s.getPredictions()

	directionInt := 0
	if strings.EqualFold(destination, s.Destination1) {
		directionInt = 1
	}
	var next models.Prediction
	for _, prediction := range predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) && prediction.Attributes.DirectionID == directionInt {
			next = prediction
			break
		}
	}
	if next.Attributes.DepartureTime.IsZero() {
		if time.Now().Hour() < 4 {
			return "I couldn't get a prediction for the next train. It's pretty late, so the line may not be running right now."
		}
		return "I couldn't get a prediction for the next train. Try again.\n(NOTE: This may be an API issue)"
	}

	if s.Destination0 == "Ashmont/Braintree" && directionInt == 0 {
		return fmt.Sprintf("The next train from %s to either Ashmont or Braintree is expected around **%s**. I can't be more specific than that right now unfortunately.", s.Name, next.Attributes.DepartureTime.Format(time.Kitchen))
	}

	caser := cases.Title(language.AmericanEnglish)
	destinationName := caser.String(destination)

	return fmt.Sprintf("The next train from %s to %s is expected around **%s**", s.Name, destinationName, next.Attributes.DepartureTime.Format(time.Kitchen))
}

// Predict the next train from a given station that is heading in the specified direction
func (s *Station) predictDirection(direction string) string {
	if !s.checkForStation() {
		return "Station not found. Check it and try again."
	}
	if s.Line == "" {
		return "In progress."
	}
	predictions := s.getPredictions()
	if ((s.Line == "Red" || s.Line == "Orange" || s.Line == "Mattapan") && (strings.EqualFold(direction, "east") || strings.EqualFold(direction, "west"))) || ((s.Line == "Blue" || strings.HasPrefix(s.Line, "Green")) && (strings.EqualFold(direction, "north") || strings.EqualFold(direction, "south"))) {
		return "This line does not go in this direction (technically). Please use North/South for the Red, Orange, and Mattapan lines, and East/West for the Green ane Blue lines)"
	}
	directionInt := 0
	// Flip the directionInt if the request is for direction 1 internally
	if ((s.Line == "Red" || s.Line == "Orange" || s.Line == "Mattapan") && strings.EqualFold(direction, "north")) || ((s.Line == "Blue" || strings.HasPrefix(s.Line, "Green")) && strings.EqualFold(direction, "east")) {
		directionInt = 1
	}

	var next models.Prediction
	for _, prediction := range predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) && prediction.Attributes.DirectionID == directionInt {
			next = prediction
			break
		}
	}

	if next.Attributes.DepartureTime.IsZero() {
		if time.Now().Hour() < 4 {
			return "I couldn't get a prediction for the next train. Based on the current time, the line may not be running right now."
		}
		return "I couldn't get a prediction for the next train. Try again.\n(NOTE: This may be an API issue)"
	}

	if directionInt == 1 {
		return fmt.Sprintf("The next train from %s to %s is expected around **%s**", s.Name, s.Destination1, next.Attributes.DepartureTime.Format(time.Kitchen))
	}
	return fmt.Sprintf("The next train from %s to %s is expected around **%s**", s.Name, s.Destination0, next.Attributes.DepartureTime.Format(time.Kitchen))
}
