package bot

import (
	"fmt"
	"strings"
)

func Info(name string) string {

	subway := Open("stations.json")
	if name == "" {
		return "Use this command (&info) with a station name and I'll link you to that station's page. There, you can see a ton of info such as its location, next train predictions, and parking information."
	}
	for _, station := range subway {
		if strings.EqualFold(name, station.Name) || (VerifyAltNames(name, station.AltName)) {
			return fmt.Sprintf("https://mbta.com/stops/%s", station.ID)
		}
	}
	return "I couldn't find that station. Check that it's spelled correctly and try again. If it's a station with multiple lines, specify a line."
}
