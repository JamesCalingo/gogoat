package bot

import (
	"fmt"
	"gogoat/internal/models"
)

func Info(station models.Station) string {

	if station.Name == "" {
		return "I couldn't find that station. Check that it's spelled correctly and try again. If it's a station with multiple lines, specify a line."
	}
	return fmt.Sprintf("https://mbta.com/stops/%s", station.ID)
}
