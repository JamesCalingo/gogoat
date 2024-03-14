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

func checkForTransfer(station models.Station) bool {
	return station.Line == "Transfer"
}

// Get list of all predictions for a station
func getPredictions(station models.Station) []models.Prediction {
	var predictions models.Predictions
	// for _, transferStation := range TransferStations {
	// 	if strings.EqualFold(name, transferStation) {
	// 		return "This is a transfer station, please specify which line you're looking for."
	// 	}
	// }

	url := fmt.Sprintf("https://api-v3.mbta.com/predictions?sort=departure_time&filter[stop]=%s&filter[route]=%s", station.ID, station.Filter)
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

// find the immediate next prediction ignoring direction
func ListNext(station models.Station) string {
	if checkForTransfer(station) {
		return "This is a transfer station. Please specify a line for data."
	}
	predictions := getPredictions(station)
	var next0 []models.Prediction
	var next1 []models.Prediction
	for _, prediction := range predictions {
		if prediction.Attributes.Direction == 0 {
			next0 = append(next0, prediction)
		} else {
			next1 = append(next1, prediction)
		}
	}

	if station.Name == "" {
		return "Station not found. Check it and try again."
	}
	listTimes := func(destination string, predictions []models.Prediction) string {
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

func PredictDestination(station models.Station, destination string) string {
	if station.Name == "" {
		return "Station not found. Check it and try again."
	}
	if checkForTransfer(station) {
		return "This is a transfer station. Please specify a line for data."
	}

	if station.Line == "Green" {
		return "Please specify which branch you're looking for."
	}
	acceptedDirections := []string{"east", "west", "north", "south"}
	if Contains(acceptedDirections, destination) {
		return predictDirection(station, destination)
	}

	destinations := []string{strings.ToLower(station.Destination0), strings.ToLower(station.Destination1)}
	if station.Destination0 == "Ashmont/Braintree" {
		destinations = append(destinations, "ashmont", "braintree")
	}
	if !Contains(destinations, strings.ToLower(destination)) {
		return "Cannot currently predict next train for this trip. Try again."
	}
	predictions := getPredictions(station)

	directionInt := 0
	if strings.EqualFold(destination, station.Destination1) {
		directionInt = 1
	}
	var next models.Prediction
	for _, prediction := range predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) && prediction.Attributes.Direction == directionInt {
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

func predictDirection(station models.Station, direction string) string {
	if station.Name == "" {
		return "Station not found. Check it and try again."
	}
	predictions := getPredictions(station)
	if ((station.Line == "Red" || station.Line == "Orange" || station.Line == "Mattapan") && (strings.EqualFold(direction, "east") || strings.EqualFold(direction, "west"))) || ((station.Line == "Blue" || strings.HasPrefix(station.Line, "Green")) && (strings.EqualFold(direction, "north") || strings.EqualFold(direction, "south"))) {
		return "This line does not go in this direction (technically). Please use North/South for the Red, Mattapan, and Orange lines, East/West for the Green ane Blue lines)"
	}
	directionInt := 0
	if ((station.Line == "Red" || station.Line == "Orange" || station.Line == "Mattapan") && strings.EqualFold(direction, "north")) || ((station.Line == "Blue" || strings.HasPrefix(station.Line, "Green")) && strings.EqualFold(direction, "east")) {
		directionInt = 1
	}
	var next models.Prediction
	for _, prediction := range predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) && prediction.Attributes.Direction == directionInt {
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
