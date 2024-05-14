package bot

import (
	"encoding/json"
	"io"
	"log"
	"os"
	"strings"
)

// These are functions used around the other parts of this bot. None of them send messages to Discord, thus why I've collected them here.

var subwayLines = []string{"Red", "Orange", "Blue", "Green", "Green-B", "Green-C", "Green-D", "Green-E", "Mattapan"}

var commuterLines = []string{"Fairmount", "Fitchburg", "Worcester", "Franklin", "Greenbush", "Haverhill", "Kingston", "Lowell", "Middleborough", "Needham", "Newburyport", "Providence", "Foxboro"}

// Check for an error
func checkError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

// Check if a slice contains a certain element
func contains(list []string, match string) bool {
	for _, elem := range list {
		if strings.EqualFold(elem, match) {
			return true
		}
	}
	return false
}

// Opens files - in GogoaT's case, the internal station list
func openFile(fileName string) []Station {
	var list []Station
	file, fileErr := os.Open(fileName)
	if fileErr != nil {
		log.Fatal(fileErr)
	}
	data, _ := io.ReadAll(file)
	json.Unmarshal(data, &list)

	return list
}

// Function to separate commands from messages (and station names from directions)
func breakMessage(message string, separator string) (pre string, post string) {
	message = strings.ToLower(message)
	pre, post, _ = strings.Cut(message, separator)
	return
}

// Gets the station struct from our json list
func findStation(name string) Station {
	var empty Station

	stations := openFile("../stations.json")
	for _, station := range stations {
		if strings.EqualFold(name, station.Name) || (verifyAltName(name, station.AltName)) {
			return station
		}
	}

	return empty
}

// Because users may have different "pet names" for stations other than what the bot expects, it's important to check for them
func verifyAltName(name string, alts []string) bool {
	for _, altName := range alts {
		if strings.EqualFold(name, altName) {
			return true
		}
	}
	return false
}
