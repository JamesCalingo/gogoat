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

// Get list of all predictions for a station
func getPredictions(station models.Station) models.Predictions {
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
	return predictions
}

// find the immediate next prediction ignoring direction
func PredictNext(station models.Station) string {
	predictions := getPredictions(station)
	var next models.Prediction
	for _, prediction := range predictions.Predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) {
			next = prediction
			break
		}
	}
	departure := next.Attributes
	fmt.Println(departure)
	if station.Name == "" {
		return "No trains found."
	}
	if departure.Direction == 0 {
		return fmt.Sprintf("The next train at %s should be there around %s and is heading for %s", station.Name, departure.DepartureTime.Format(time.TimeOnly), station.Direction0)
	}
	return fmt.Sprintf("The next train at %s should be there around %s and is heading for %s", station.Name, departure.DepartureTime.Format(time.TimeOnly), station.Direction1)
}

func PredictDirection(station models.Station, direction string) string {
	if station.Name == "" {
		return "No trains found."
	}
	predictions := getPredictions(station)
	var directionInt int
	if station.Line == "Red" || station.Line == "Orange" && strings.EqualFold(direction, "north") || (station.Line == "Blue" || strings.HasPrefix(station.Line, "Green") && strings.EqualFold(direction, "east")) {
		directionInt = 1
	}
	var next models.Prediction
	for _, prediction := range predictions.Predictions {
		if time.Now().Before(prediction.Attributes.DepartureTime) && prediction.Attributes.Direction == directionInt {
			next = prediction
			break
		}
	}
	fmt.Println(next)
	return fmt.Sprintf("The next %sbound train from %s is expected around %s", strings.ToLower(direction), station.Name, next.Attributes.DepartureTime.Format(time.TimeOnly))
}
