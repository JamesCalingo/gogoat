package bot

import (
	"encoding/json"
	"errors"
	"fmt"
	"gogoat/internal/models"
	"io"
	"log"
	"os"
	"strings"
)

var transferStations = []string{"North Station", "Haymarket", "Government Center", "Gov Center", "GC", "State", "Park Street", "Park", "Downtown Crossing", "DTX", "Downtown Xing"}

func CheckError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func Open(fileName string) models.Stations {
	var list models.Stations
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

func FindStation(name string) (models.Station, error) {
	var empty models.Station

	subway := Open("stations.json")
	for _, station := range subway {
		if strings.EqualFold(name, station.Name) || (verifyAltNames(name, station.AltName)) {
			return station, nil
		}
	}
	return empty, errors.New("station not found")
}

func Info(name string) string {
	for _, station := range transferStations {
		if strings.EqualFold(name, station) {
			return "This is a transfer station. Please specify which line you're looking for."
		}
	}

	subway := Open("stations.json")
	if name == "" {
		return "Use this command (&info) with a station name and I'll link you to that station's page. There, you can see a ton of info such as its location, next train predictions, and parking information."
	}
	for _, station := range subway {
		if strings.EqualFold(name, station.Name) || (verifyAltNames(name, station.AltName)) {
			return fmt.Sprintf("Predictions for %s: %s", station.Name, fmt.Sprintf("https://mbta.com/stops/%s", station.ID))
		}
	}
	return "I couldn't find that station. Check that it's spelled correctly and try again."
}
