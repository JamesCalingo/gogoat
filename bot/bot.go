package bot

import (
	"fmt"
	"os"
	"os/signal"
	"strings"

	"github.com/bwmarrin/discordgo"
)

var Token string

func Run() {
	discord, err := discordgo.New("Bot " + Token)
	CheckError(err)

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
	case strings.HasPrefix(message.Content, "&info"):
		station := GetStationFromMessage(message.Content)
		discord.ChannelMessageSend(message.ChannelID, Info(station))
	case strings.HasPrefix(message.Content, "&next"):
		station := GetStationFromMessage(message.Content)
		discord.ChannelMessageSend(message.ChannelID, Predict(station))

	}
}
