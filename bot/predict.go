package bot

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
)

type Prediction struct {
	DepartsAt time.Time `json:"departure_time"`
}

func Predict(station string) string {
	var departure Prediction
	res, err := http.Get("https://api-v3.mbta.com/predictions?filter%5Bstop%5D=70171")
	if err != nil {
		log.Fatal(err)
	}
	data, _ := io.ReadAll(res.Body)
	fmt.Println(string(data))
	json.Unmarshal(data, &departure)
	fmt.Println(departure)
	if !strings.Contains(station, "Newton") {
		return "I can't predict for that station just yet..."
	}
	return "Your next train should be departing in x minutes"
}
