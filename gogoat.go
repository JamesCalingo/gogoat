package main

import (
	"gogoat/bot"
	"os"

	"github.com/joho/godotenv"
)

func getToken(key string) string {
	err := godotenv.Load(".env")
	bot.CheckError(err)
	return os.Getenv(key)
}

func main() {

	bot.Token = getToken("TOKEN")
	bot.Run()
}
