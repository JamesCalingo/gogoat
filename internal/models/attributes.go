package models

import "time"

type Attributes struct {
	ArrivalTime   time.Time `json:"arrival_time"`
	DepartureTime time.Time `json:"departure_time"`
	Direction     int       `json:"direction_id"`
}
