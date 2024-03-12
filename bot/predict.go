package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
)

func Predict(name string) string {
	var predictions models.Predictions
	station, _ := FindStation(name)

	url := "https://api-v3.mbta.com/predictions?filter%5Bstop%5D=" + station.ID
	res, err := http.Get(url)
	CheckError(err)
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)
	fmt.Println(predictions)
	return fmt.Sprintf("The next train at %s should arrive around %s", station.Name, "TBD")
}
