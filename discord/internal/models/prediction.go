package models

type Predictions struct {
	Predictions []Prediction `json:"data"`
}

type Prediction struct {
	Attributes    Attributes    `json:"attributes"`
	ID            string        `json:"id"`
	Relationships Relationships `json:"relationships"`
	Type          string        `json:"type"`
}
