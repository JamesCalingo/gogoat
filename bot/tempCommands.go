package bot

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"strings"
)

type Station struct {
	Name string `json:"name"`
	ID   string `json:"id"`
}

type Stations []Station

func Open(fileName string) Stations {
	var list Stations
	file, fileErr := os.Open(fileName)
	if fileErr != nil {
		log.Fatal(fileErr)
	}
	data, _ := io.ReadAll(file)
	json.Unmarshal(data, &list)

	return list
}

func When(name string) string {
	greenLine := Open("greenline.json")
	for _, station := range greenLine {
		if strings.EqualFold(name, station.Name) {
			return fmt.Sprintf("Predictions for %s: %s", station.Name, fmt.Sprintf("https://mbta.com/stops/%s", station.ID))
		}
	}
	return "I couldn't find that station. Check that it's spelled correctly and try again."
}
