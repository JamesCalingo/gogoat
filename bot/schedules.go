package bot

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

// get schedules for a line

func getSchedules(line string) string {
	silver := []string{"SL1", "SL2", "SL3", "SL4", "SL5", "SLW"}
	_, err := strconv.Atoi(line)
	if err != nil && !contains(silver, strings.ToUpper(line)) {
		return getTrainSchedules(line)
	}
	return getBusSchedules(line)
}

func getTrainSchedules(line string) string {

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
	if contains(subwayLines, line) {
		caser := cases.Title(language.AmericanEnglish)
		name := caser.String(line)
		return fmt.Sprintf("https://www.mbta.com/schedules/%s/line", name)
	}
	if contains(commuterLines, line) {
		caser := cases.Title(language.AmericanEnglish)
		name := caser.String(line)
		return fmt.Sprintf("https://www.mbta.com/schedules/CR-%s/timetable", name)
	}
	return "Line not found."
}

func getBusSchedules(line string) string {
	//Convert the Silver Line routes to their internal naming
	if strings.EqualFold(line, "SL1") {
		line = "741"
	}
	if strings.EqualFold(line, "SL2") {
		line = "742"
	}
	if strings.EqualFold(line, "SL3") {
		line = "743"
	}
	if strings.EqualFold(line, "SL4") {
		line = "751"
	}
	if strings.EqualFold(line, "SL5") {
		line = "749"
	}
	if strings.EqualFold(line, "SLW") {
		line = "746"
	}
	url := fmt.Sprintf("https://www.mbta.com/schedules/%s/line", line)
	res, err := http.Get(url)
	checkError(err)
	if res.StatusCode != 200 {
		return "This is not a valid bus line."
	}
	return fmt.Sprintf("%s\n%s", url, getBusAlerts(line))
}
