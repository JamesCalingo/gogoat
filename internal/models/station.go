package models

type Station struct {
	Name    string   `json:"name"`
	AltName []string `json:"alt_name"`
	ID      string   `json:"id"`
}

type Stations []Station
