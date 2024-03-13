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
	discord.ChannelMessageSend(message.ChannelID, "finding your info...")
	_, name := BreakMessage(message.Content, " ")
	station, _ := FindStation(name)

	switch {
	case message.Content == "&where":
		discord.ChannelMessageSend(message.ChannelID, "See a live map of the T here: https://mbta.sites.fas.harvard.edu/T/subway-map.html")
	case message.Content == "&info":
		discord.ChannelMessageSend(message.ChannelID, "Use this command (&info) with a station name to get the webpage for that station.")
	case strings.HasPrefix(message.Content, "&info "):
		discord.ChannelMessageSend(message.ChannelID, Info(station))
	case message.Content == "&next":
		discord.ChannelMessageSend(message.ChannelID, "Use this command (&next) with a station name to get the next train from that station.")
	case strings.HasPrefix(message.Content, "&next "):
		discord.ChannelMessageSend(message.ChannelID, PredictNext(station))
	case strings.HasPrefix(message.Content, "&nextfrom "):
		//Newton breaks this if the spaces aren't present...
		stationName, direction := BreakMessage(name, " to ")
		station, _ = FindStation(stationName)
		discord.ChannelMessageSend(message.ChannelID, PredictDirection(station, direction))
	}
}
