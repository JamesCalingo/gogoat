package main

import (
	"gogoat/bot"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func getValueFromEnv(key string) string {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal(err)
	}
	return os.Getenv(key)
}

func main() {
	bot.Key = getValueFromEnv("KEY")
	bot.Token = getValueFromEnv("TOKEN")
	bot.Run()
}
