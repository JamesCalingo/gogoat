package bot

import "fmt"

type Station struct {
	Name         string   `json:"name"`
	AltName      []string `json:"alt_name"`
	ID           string   `json:"id"`
	Line         string   `json:"line"`
	Destination0 string   `json:"destination_0"`
	Destination1 string   `json:"destination_1"`
}

// Check that a station exists. If it doesn't, it will return an empty name
func (s *Station) CheckForStation() bool {
	return s.Name != ""
}

// Check if the station is labeled as "Transfer" in stations.json
func (s *Station) CheckForTransfer() bool {
	return s.Line == "Transfer"
}

// Link to a station's website on mbta.com
func (s *Station) LinkToStationPage() string {
	if s.Name == "" {
		return "I couldn't find that station. Check that it's spelled correctly and try again."
	}
	website := fmt.Sprintf("https://mbta.com/stops/%s", s.ID)
	alerts := s.GetAlerts()
	return website + alerts
}
