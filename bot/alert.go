package bot

import (
	"encoding/json"
	"fmt"
	"gogoat/internal/models"
	"io"
	"net/http"
)

// Find all alerts (current and upcoming) for a station. As it turns out, there's a lot of data in the T's alerts that may or may not have importance to the end user, so we're just using the header for now since it tends to contain the most pertinent information.
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

// Find only alerts that are currently affecting a station. This is mainly for if/when shuttles replace train service somewhere.
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
