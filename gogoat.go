package main

import (
	"fmt"
	"gogoat/bot"
	"log"
	"os"
	"strings"

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
	pieces := os.Args[1:]
	name := strings.Join(pieces, " ")
	fmt.Println(bot.When(name))
	// bot.Token = getToken("TOKEN")
	// bot.Run()
}
