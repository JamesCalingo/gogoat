package bot

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"strings"

	"github.com/bwmarrin/discordgo"
)

var Token string

func checkError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func Run() {
	discord, err := discordgo.New("Bot " + Token)
	checkError(err)

	discord.AddHandler(newMessage)

	discord.Open()
	defer discord.Close()

	fmt.Println("Ret-to-GO")
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	<-c
}

func newMessage(discord *discordgo.Session, message *discordgo.MessageCreate) {
	if message.Author.ID == discord.State.User.ID {
		return
	}

	switch {
	case message.Content == "&where":
		discord.ChannelMessageSend(message.ChannelID, "See a live map of the T here: https://mbta.sites.fas.harvard.edu/T/subway-map.html")
	case strings.HasPrefix(message.Content, "&when"):
		_, station, _ := strings.Cut(message.Content, " ")
		discord.ChannelMessageSend(message.ChannelID, When(station))

	}
}
