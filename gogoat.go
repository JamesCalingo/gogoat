package main

import (
	"gogoat/bot"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func getToken(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}
	return os.Getenv(key)
}

func main() {

	bot.Token = getToken("TOKEN")
	bot.Run()

}
