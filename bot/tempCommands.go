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
	Name    string   `json:"name"`
	AltName []string `json:"alt_name"`
	ID      string   `json:"id"`
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

func verifyAltNames(name string, alts []string) bool {
	for _, altName := range alts {
		if strings.EqualFold(name, altName) {
			return true
		}
	}
	return false
}

func When(name string) string {
	subway := Open("stations.json")
	if name == "" {
		return "Use this command ($when) with a station name and I'll give you a prediction of when the next train will arrive."
	}
	for _, station := range subway {
		if strings.EqualFold(name, station.Name) || (verifyAltNames(name, station.AltName)) {
			return fmt.Sprintf("Predictions for %s: %s", station.Name, fmt.Sprintf("https://mbta.com/stops/%s", station.ID))
		}
	}
	return "I couldn't find that station. Check that it's spelled correctly and try again."
}
