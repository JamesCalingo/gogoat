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
	// pieces := os.Args[1:]
	// name := strings.Join(pieces, " ")
	// fmt.Println(bot.Predict(name))

	bot.Token = getToken("TOKEN")
	bot.Run()
}
