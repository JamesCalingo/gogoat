package models

type Relationships struct {
	Route   route   `json:"route"`
	Stop    stop    `json:"stop"`
	Trip    trip    `json:"trip"`
	Vehicle vehicle `json:"vehicle"`
}

type relationship_data struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type route struct {
	Data relationship_data `json:"data"`
}

type stop struct {
	Data relationship_data `json:"data"`
}

type trip struct {
	Data relationship_data `json:"data"`
}

type vehicle struct {
	Data relationship_data `json:"data"`
}
