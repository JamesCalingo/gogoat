package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
	"sort"
	"strings"
	"time"
)

// Get list of all predictions for a station
func getPredictions(station models.Station) []models.Prediction {
	var predictions models.Predictions
	// for _, transferStation := range TransferStations {
	// 	if strings.EqualFold(name, transferStation) {
	// 		return "This is a transfer station, please specify which line you're looking for."
	// 	}
	// }

	url := "https://api-v3.mbta.com/predictions?filter%5Bstop%5D=" + station.ID
	res, err := http.Get(url)
	CheckError(err)
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)
	filter := func(predictions models.Predictions) []models.Prediction {
		var filtered []models.Prediction
		for _, prediction := range predictions.Predictions {
			if Contains(Lines, prediction.Relationships.Route.Data.ID) && !prediction.Attributes.DepartureTime.IsZero() {
				filtered = append(filtered, prediction)
			}
		}
		sort.Slice(filtered, func(i, j int) bool {
			return filtered[i].Attributes.DepartureTime.Before(filtered[j].Attributes.DepartureTime)
		})
		return filtered
	}
	return filter(predictions)
}

// find the immediate next prediction ignoring direction
func PredictNext(station models.Station) string {
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
		return "No trains found."
	}
	listTimes := func(destination string, predictions []models.Prediction) string {
		if destination == "" {
			return destination
		}
		output := fmt.Sprintf("To %s:\n", destination)
		if len(predictions) == 0 {
			output += "No trains found.\n(NOTE: I am still in beta, so this is likely an API issue)\n"
		}
		for _, prediction := range predictions {
			output += fmt.Sprintf("%s\n", prediction.Attributes.DepartureTime.Format(time.Kitchen))
		}
		return output
	}
	return fmt.Sprintf("Next trains from %s:\n%s%s", station.Name, listTimes(station.Direction0, next0), listTimes(station.Direction1, next1))

}

func PredictDirection(station models.Station, direction string) string {
	if station.Name == "" {
		return "No trains found."
	}
	acceptedDirections := []string{"east", "west", "north", "south"}
	if !Contains(acceptedDirections, direction) {
		return "Please use north, south, east, or west"
	}
	predictions := getPredictions(station)
	if ((station.Line == "Red" || station.Line == "Orange" || station.Line == "Mattapan") && (strings.EqualFold(direction, "east") || strings.EqualFold(direction, "west"))) || ((station.Line == "Blue" || strings.HasPrefix(station.Line, "Green")) && (strings.EqualFold(direction, "north") || strings.EqualFold(direction, "south"))) {
		return "This line does not go in this direction (technically). Try a different direction (North/South for the Red/Mattapan and Orange lines, East/West for the Green ane Blue lines)"
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

	if directionInt == 0 {
		return fmt.Sprintf("The next %sbound train from %s to %s is expected around %s", strings.ToLower(direction), station.Name, station.Direction0, next.Attributes.DepartureTime.Format(time.Kitchen))
	}
	return fmt.Sprintf("The next %sbound train from %s to %s is expected around %s", strings.ToLower(direction), station.Name, station.Direction1, next.Attributes.DepartureTime.Format(time.Kitchen))
}