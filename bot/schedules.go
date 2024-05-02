package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
	"strconv"
	"strings"
	"time"

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

func (s *Station) getStationSchedule() ([]models.Prediction, []models.Prediction) {
	var predictions models.Predictions

	// The API requires a leading zero for minutes < 10, so this formats the minutes to work properly
	currentMinutes := time.Now().Minute()
	minutes := ""
	if currentMinutes < 10 {
		minutes = "0" + strconv.Itoa(currentMinutes)
	} else {
		minutes = strconv.Itoa(currentMinutes)
	}

	currentTime := fmt.Sprintf("%d:%s", time.Now().Hour(), minutes)

	url := fmt.Sprintf("https://api-v3.mbta.com/schedules?sort=departure_time&page[limit]=10&filter[min_time]=%s&filter[route_type]=2&filter[stop]=%s", currentTime, s.ID)

	res, err := http.Get(url)
	checkError(err)
	defer res.Body.Close()
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &predictions)

	var outbound []models.Prediction
	var inbound []models.Prediction
	for _, prediction := range predictions.Predictions {
		if prediction.Attributes.DirectionID == 1 {
			inbound = append(inbound, prediction)
		} else if !prediction.Attributes.DepartureTime.IsZero() {
			outbound = append(outbound, prediction)
		}
	}
	return outbound, inbound
}

func (s *Station) listStationSchedule() string {

	outbound, inbound := s.getStationSchedule()

	result := func(schedule []models.Prediction) string {
		output := ""
		if len(schedule) == 0 {
			output = "No trains found.\n"
		}
		for _, prediction := range schedule {
			output += fmt.Sprintf("%s\n", prediction.Attributes.DepartureTime.Format(time.Kitchen))
		}
		return output
	}
	message := fmt.Sprintf("Next trains from %s:\n**OUTBOUND**:\n%s\n**INBOUND**:\n%s", s.Name, result(outbound), result(inbound))

	return message
}

func (s *Station) predictDirectionCommuter(direction string) string {
	directions := []string{"outbound", "inbound", "boston"}
	if !contains(directions, direction) {
		return "Please use outbound and inbound (or Boston) for commuter trains."
	}

	outbound, inbound := s.getStationSchedule()

	prediction := outbound[0]
	if strings.EqualFold(direction, "inbound") || strings.EqualFold(direction, "boston") {
		prediction = inbound[0]
	}

	if strings.EqualFold(direction, "boston") {
		direction = "inbound"
	}

	output := fmt.Sprintf("The next %s train from %s is at %s", direction, s.Name, prediction.Attributes.DepartureTime.Format(time.Kitchen))

	return output
}
