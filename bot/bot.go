package bot

import (
	"fmt"
	"os"
	"os/signal"
	"strings"

	"github.com/bwmarrin/discordgo"
)

var Token string
var Key string

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

// Whenever GogoaT receives a message, this function tells it how it should respond
func newMessage(discord *discordgo.Session, message *discordgo.MessageCreate) {

	loader := func() {
		discord.ChannelMessageSend(message.ChannelID, "*working...*")
	}

	if message.Author.ID == discord.State.User.ID {
		return
	}
	_, name := breakMessage(message.Content, " ")

	station := findStation(name)
	switch {
	case strings.EqualFold(message.Content, "start"):
		dm, dmErr := discord.UserChannelCreate(message.Author.ID)
		checkError(dmErr)
		discord.ChannelMessageSend(dm.ID, "Hello!\nThis is a private message where I can tell you what you need.")
	case strings.EqualFold(message.Content, "map"):
		discord.ChannelMessageSend(message.ChannelID, "See a live map of the T here: https://mbta.sites.fas.harvard.edu/T/subway-map.html")

	case strings.EqualFold(message.Content, "info"):
		discord.ChannelMessageSend(message.ChannelID, "Use this command (info) with a station name to get the MBTA website for that station.")

	case strings.HasPrefix(strings.ToLower(message.Content), "info "):
		loader()
		discord.ChannelMessageSend(message.ChannelID, station.linkToStationPage())

	case strings.HasPrefix(strings.ToLower(message.Content), "schedule "):
		loader()
		discord.ChannelMessageSend(message.ChannelID, getSchedules(name))

	case strings.EqualFold(message.Content, "next"):
		discord.ChannelMessageSend(message.ChannelID, "Use this command (next) with:\n- a station name to get a list of train predictions from that station\n- a station name, then \"to\", then one of the ends of a line to get the next train from that station to the destination station")

	case strings.HasPrefix(strings.ToLower(message.Content), "next ") && strings.Contains(strings.ToLower(message.Content), " to "):
		loader()
		//This breaks somewhat easily if the spaces aren't present...
		stationName, destination := breakMessage(name, " to ")
		station = findStation(stationName)
		discord.ChannelMessageSend(message.ChannelID, station.predictDestination(destination))
	case strings.HasPrefix(strings.ToLower(message.Content), "next "):
		loader()
		discord.ChannelMessageSend(message.ChannelID, station.listNext())
	}
}
