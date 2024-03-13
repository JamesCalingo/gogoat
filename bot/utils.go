package bot

import (
	"encoding/json"
	"errors"
	"gogoat/internal/models"
	"io"
	"log"
	"os"
	"strings"
)

// These are functions used around the other parts of this bot. None of them send messages to Discord, thus why I've collected them here.

var TransferStations = []string{"North Station", "Haymarket", "Government Center", "Gov Center", "GC", "State", "Park Street", "Park", "Downtown Crossing", "DTX", "Downtown Xing"}

// Go standard error checking
func CheckError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

// Opens the internal station list
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

// Function to separate commands from messages (and station names from directions)
func BreakMessage(message string, separator string) (pre string, post string) {
	pre, post, _ = strings.Cut(message, separator)
	return
}

// Gets the station struct from our json list
func FindStation(name string) (models.Station, error) {
	var empty models.Station

	subway := Open("stations.json")
	// for _, station := range TransferStations {
	// 	if strings.EqualFold(name, station) {
	// 		return empty, errors.New("transfer station")
	// 	}
	// }
	for _, station := range subway {
		if strings.EqualFold(name, station.Name) || (VerifyAltNames(name, station.AltName)) {
			return station, nil
		}
	}
	return empty, errors.New("station not found")
}

// Because users may have different "pet names" for stations other than what the bot expects, it's important to check for them
func VerifyAltNames(name string, alts []string) bool {
	for _, altName := range alts {
		if strings.EqualFold(name, altName) {
			return true
		}
	}
	return false
}
