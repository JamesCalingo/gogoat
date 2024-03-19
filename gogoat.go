package main

import (
	"gogoat/bot"
	"os"

	"github.com/joho/godotenv"
)

func getValueFromEnv(key string) string {
	err := godotenv.Load(".env")
	bot.CheckError(err)
	return os.Getenv(key)
}

func main() {
	bot.Key = getValueFromEnv("KEY")
	bot.Token = getValueFromEnv("TOKEN")
	bot.Run()
}
