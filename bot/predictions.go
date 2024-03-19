package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
	"strings"
	"time"
)

type Station struct {
	Name         string   `json:"name"`
	AltName      []string `json:"alt_name"`
	ID           string   `json:"id"`
	Line         string   `json:"line"`
	Destination0 string   `json:"destination_0"`
	Destination1 string   `json:"destination_1"`
}

// Check that a station exists. If it doesn't, it will return an empty name
func (station *Station) check() bool {
	return station.Name != ""
}

// Check if the station is labeled as "Transfer" in stations.json
func (station *Station) checkForTransfer() bool {
	return station.Line == "Transfer"
}

// Get list of all predictions for a station
func (station *Station) getPredictions() []models.Prediction {
	var predictions models.Predictions

	url := fmt.Sprintf("https://api-v3.mbta.com/predictions?sort=departure_time&filter[stop]=%s&filter[route]=%s", station.ID, station.Line)
	res, err := http.Get(url)
	CheckError(err)
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)
	//Some predictions don't have a specified departure time, so we should filter them out
	filter := func(predictions models.Predictions) []models.Prediction {
		var filtered []models.Prediction
		for _, prediction := range predictions.Predictions {
			if Contains(Lines, prediction.Relationships.Route.Data.ID) && !prediction.Attributes.DepartureTime.IsZero() {
				filtered = append(filtered, prediction)
			}
		}
		return filtered
	}
	return filter(predictions)
}

// Creates a list of future departures from a station in both directions
func (station *Station) ListNext() string {
	if station.checkForTransfer() {
		return "This is a transfer station. Please specify a line for data."
	}
	predictions := station.getPredictions()
	var next0 []models.Prediction
	var next1 []models.Prediction
	for _, prediction := range predictions {
		if prediction.Attributes.DirectionID == 0 {
			next0 = append(next0, prediction)
		} else {
			next1 = append(next1, prediction)
		}
	}

	if !station.check() {
		return "Station not found. Check it and try again."
	}
	// Turn lists of times into single string so they can be broadcast
	listTimes := func(destination string, predictions []models.Prediction) string {
		//For terminal stations
		if destination == "" {
			return destination
		}
		output := fmt.Sprintf("To %s:\n", destination)
		if len(predictions) == 0 {
			output += "No trains found.\n(NOTE: This may be an API issue)\n"
		}
		for _, prediction := range predictions {
			output += fmt.Sprintf("%s\n", prediction.Attributes.DepartureTime.Format(time.Kitchen))
		}
		return output
	}
	return fmt.Sprintf("Next trains from %s:\n%s%s", station.Name, listTimes(station.Destination0, next0), listTimes(station.Destination1, next1))

}

// Predict the next train from a given station to the terminus of the line
func (station *Station) PredictDestination(destination string) string {
	if !station.check() {
		return "Station not found. Check it and try again."
	}
	if station.checkForTransfer() {
		return "This is a transfer station. Please specify a line for data."
	}

	if station.Line == "Green" {
		return "Please specify which branch you're looking for."
	}
	//This allows the user to use a direction instead of the destination if they so choose
	acceptedDirections := []string{"east", "west", "north", "south"}
	if Contains(acceptedDirections, destination) {
		return station.predictDirection(destination)
	}

	destinations := []string{strings.ToLower(station.Destination0), strings.ToLower(station.Destination1)}
	// For southbound Red Line trains. There is a way to get the exact destination, but that's under construction for now
	if station.Destination0 == "Ashmont/Braintree" {
		destinations = append(destinations, "ashmont", "braintree")
	}
	// Boston College and Heath Street have alternate names, so we need to be able to check those as well
	if station.Destination0 == "Boston College" || station.Destination0 == "Heath Street" {
		destinationStat := FindStation(destination)
		for _, altName := range destinationStat.AltName {
			lowercased := strings.ToLower(altName)
			destinations = append(destinations, lowercased)
		}
	}
	if !Contains(destinations, strings.ToLower(destination)) {
		return "Cannot currently predict next train for this trip. Try again."
	}
	predictions := station.getPredictions()

	directionInt := 0
	if strings.EqualFold(destination, station.Destination1) {
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

	if station.Destination0 == "Ashmont/Braintree" && directionInt == 0 {
		return fmt.Sprintf("The next train from %s to either Ashmont or Braintree is expected around %s. I can't be more specific than that right now unfortunately.", station.Name, next.Attributes.DepartureTime.Format(time.Kitchen))
	}

	return fmt.Sprintf("The next train from %s to %s is expected around %s", station.Name, strings.Title(destination), next.Attributes.DepartureTime.Format(time.Kitchen))
}

// Predict the next train from a given station that is heading in the specified direction
func (station *Station) predictDirection(direction string) string {
	if !station.check() {
		return "Station not found. Check it and try again."
	}
	predictions := station.getPredictions()
	if ((station.Line == "Red" || station.Line == "Orange" || station.Line == "Mattapan") && (strings.EqualFold(direction, "east") || strings.EqualFold(direction, "west"))) || ((station.Line == "Blue" || strings.HasPrefix(station.Line, "Green")) && (strings.EqualFold(direction, "north") || strings.EqualFold(direction, "south"))) {
		return "This line does not go in this direction (technically). Please use North/South for the Red, Mattapan, and Orange lines, East/West for the Green ane Blue lines)"
	}
	directionInt := 0
	if ((station.Line == "Red" || station.Line == "Orange" || station.Line == "Mattapan") && strings.EqualFold(direction, "north")) || ((station.Line == "Blue" || strings.HasPrefix(station.Line, "Green")) && strings.EqualFold(direction, "east")) {
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

	if directionInt == 0 {
		return fmt.Sprintf("The next train from %s to %s is expected around %s", station.Name, station.Destination0, next.Attributes.DepartureTime.Format(time.Kitchen))
	}
	return fmt.Sprintf("The next train from %s to %s is expected around %s", station.Name, station.Destination1, next.Attributes.DepartureTime.Format(time.Kitchen))
}
