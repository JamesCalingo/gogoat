package bot

import (
	"fmt"
	"strings"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func GetSchedules(line string) string {
	lines := []string{"Fairmount", "Fitchburg", "Worcester", "Franklin", "Greenbush", "Haverhill", "Kingston", "Lowell", "Middleborough", "Needham", "Newburyport", "Providence", "Foxboro"}
	if strings.EqualFold(line, "Framingham") || strings.EqualFold(line, "Framingham/Worcester") {
		line = "Worcester"
	}
	if strings.EqualFold(line, "Franklin/Foxboro") {
		line = "Franklin"
	}
	if strings.EqualFold(line, "Rockport") || strings.EqualFold(line, "Newburyport/Rockport") {
		line = "Newburyport"
	}
	if strings.EqualFold(line, "Stoughton") || strings.EqualFold(line, "Providence/Stoughton") {
		line = "Providence"
	}
	if Contains(lines, line) {
		caser := cases.Title(language.AmericanEnglish)
		destinationName := caser.String(line)
		return fmt.Sprintf("https://www.mbta.com/schedules/CR-%s/timetable", destinationName)
	}
	return "Line not found."
}
