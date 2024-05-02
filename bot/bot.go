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

	channel, err := discord.State.Channel(message.ChannelID)
	if err != nil {
		if channel, err = discord.Channel(message.ChannelID); err != nil {
			fmt.Println(err)
		}
	}

	loader := func() {
		discord.ChannelMessageSend(message.ChannelID, "*working...*")
	}

	if message.Author.ID == discord.State.User.ID || (channel.Type != discordgo.ChannelTypeDM && message.ChannelID != "1235384282172620891") {
		return
	}
	_, name := breakMessage(message.Content, " ")

	station := findStation(name)
	switch {

	// "start" - starts a private GogoaT instance
	case strings.EqualFold(message.Content, "!start"):
		dm, dmErr := discord.UserChannelCreate(message.Author.ID)
		checkError(dmErr)
		discord.ChannelMessageSend(dm.ID, "Hello!\nI'm GogoaT - your helpful, personal guide to MBTA information!\nTo see how I can help you figure out when your train or bus is, use \"commands\" to show my list of commands.")

	// "commands" - link to doc with commands
	case strings.EqualFold(message.Content, "commands"):
		discord.ChannelMessageSend(message.ChannelID, "My list of commands can be found here: https://github.com/JamesCalingo/gogoat/blob/main/commands.md")

	// "map" - links to a live map of the subway
	case strings.EqualFold(message.Content, "map"):
		discord.ChannelMessageSend(message.ChannelID, "See a live map of the T here: https://mbta.sites.fas.harvard.edu/T/subway-map.html")

	// "info" - links to a station's web page
	case strings.HasPrefix(strings.ToLower(message.Content), "info "):
		loader()
		discord.ChannelMessageSend(message.ChannelID, station.linkToStationPage())

	// "schedule" - links to a line's schedule
	case strings.HasPrefix(strings.ToLower(message.Content), "schedule "):
		loader()

		discord.ChannelMessageSend(message.ChannelID, getSchedules(name))

	// "next" with "to" - find the next train from a station to a direction/destination (subway)
	case strings.HasPrefix(strings.ToLower(message.Content), "next ") && strings.Contains(strings.ToLower(message.Content), " to "):
		loader()
		//This breaks somewhat easily if the spaces aren't present...
		stationName, destination := breakMessage(name, " to ")
		station = findStation(stationName)
		discord.ChannelMessageSend(message.ChannelID, station.predictDestination(destination))

	// "next" - find the list of predicted departures from a station (subway)
	case strings.HasPrefix(strings.ToLower(message.Content), "next "):
		loader()
		discord.ChannelMessageSend(message.ChannelID, station.listNext())

	// To keep things "neat" on the main Discord server, I've limited GogoaT's functionality to DMs. However, you need to start a DM with GogoaT, so the server message is here
	case channel.Type != discordgo.ChannelTypeDM:
		discord.ChannelMessageSend(message.ChannelID, "To reduce \"clutter\", GogoaT only works in private messages. Please use the \"!start\" command to start a DM with GogoaT where you can access the information you need.")

	default:
		discord.ChannelMessageSend(message.ChannelID, "I couldn't understand your request. Try again.")
	}

}
