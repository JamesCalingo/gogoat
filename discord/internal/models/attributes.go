package models

import "time"

type Attributes struct {
	ArrivalTime          time.Time `json:"arrival_time"`
	ArrivalUncertainty   int       `json:"arrival_uncertainty"`
	DepartureTime        time.Time `json:"departure_time"`
	DepartureUncertainty int       `json:"departure_uncertainty"`
	DirectionID          int       `json:"direction_id"`
	Revenue              string    `json:"revenue"`
	ScheduleRelationship string    `json:"schedule_relationship"`
	Status               string    `json:"status"`
	StopSequence         int       `json:"stop_sequence"`
	ID                   string    `json:"id"`
}
