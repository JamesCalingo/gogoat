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

func Predict(name string) string {
	var predictions models.Predictions
	for _, transferStation := range TransferStations {
		if strings.EqualFold(name, transferStation) {
			return "This is a transfer station, please specify which line you're looking for."
		}
	}
	station, stationErr := FindStation(name)
	if stationErr != nil {
		return "I can't find a next train for this station."
	}

	url := "https://api-v3.mbta.com/predictions?filter%5Bstop%5D=" + station.ID
	res, err := http.Get(url)
	CheckError(err)
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)
	next := predictions.Predictions[1]
	departure := next.Attributes.DepartureTime
	return fmt.Sprintf("The next train at %s should arrive around %s", station.Name, departure.Format(time.UnixDate))
}
