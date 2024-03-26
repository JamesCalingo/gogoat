package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
)

func (s *Station) GetAlerts() string {
	var alerts models.Alerts
	url := fmt.Sprintf("https://api-v3.mbta.com/alerts?fields[alert]=header&filter[stop]=%s&filter[route]=%s", s.ID, s.Line)

	res, err := http.Get(url)
	CheckError(err)
	defer res.Body.Close()
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &alerts)

	var formatted string
	for _, alert := range alerts.Alerts {
		formatted += "\nALERT: " + alert.Attributes.Header
	}
	return formatted
}

func (s *Station) GetCurrentAlerts() string {
	var alerts models.Alerts
	url := fmt.Sprintf("https://api-v3.mbta.com/alerts?fields[alert]=header&filter[stop]=%s&filter[route]=%s&filter[datetime]=NOW", s.ID, s.Line)

	res, err := http.Get(url)
	CheckError(err)
	defer res.Body.Close()
	data, _ := io.ReadAll(res.Body)
	json.Unmarshal(data, &alerts)

	var formatted string
	for _, alert := range alerts.Alerts {
		formatted += alert.Attributes.Header + "\n"
	}
	return formatted
}
