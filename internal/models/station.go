package models

type Station struct {
	Name       string   `json:"name"`
	AltName    []string `json:"alt_name"`
	ID         string   `json:"id"`
	Line       string   `json:"line"`
	Direction0 string   `json:"destination_0"`
	Direction1 string   `json:"destination_1"`
}

type Stations []Station
