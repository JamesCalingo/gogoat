package models

type Station struct {
	Name         string   `json:"name"`
	AltName      []string `json:"alt_name"`
	ID           string   `json:"id"`
	Line         string   `json:"line"`
	Filter       string   `json:"filter"`
	Destination0 string   `json:"destination_0"`
	Destination1 string   `json:"destination_1"`
}

type Stations []Station
