package bot

import (
	"fmt"
)

// Link to a station's website on mbta.com
func Info(station Station) string {
	if station.Name == "" {
		return "I couldn't find that station. Check that it's spelled correctly and try again."
	}
	return fmt.Sprintf("https://mbta.com/stops/%s", station.ID)
}
