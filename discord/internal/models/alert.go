package models

type Alerts struct {
	Alerts []Alert `json:"data"`
}

type Alert struct {
	Attributes Header `json:"attributes"`
}

type Header struct {
	Header string `json:"header"`
}
