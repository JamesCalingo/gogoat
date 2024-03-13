# gogoat
Discord Bot for Public Transportation

## Commands

- `&where` - link to a live map of the MBTA subway system
- `&info <station name>` - link to a station's web page for prediction info
- `&next <station name>` - get a list of the next predicted departures from a station
- `&nextfrom <station name> to <direction>` - get the next predicted train from that station in the specified direction. The Red, Mattapan*, and Orange lines use north/south, while the Green and Blue lines use east/west
(*Technically the Mattapan line is inbound/outbound, but this was easier to start with)
<!-- - `&nextfrom <station name> to <destination>` - get the next predicted train from that station to the specified destination. Currently, this doesn't quite work for the Green Line thanks to its service patterns -->

## The Story

I've always had an interest in trains, 

One day, when thinking of fun ideas to build, I came up with the idea of a bot based around informing users about 

Will the bot be right all of the time? No. This is the T we're talkinb about.

However, I do hope that 

### The Name

Some of you may recognize the name "GogoaT", as it's a Pokemon from Generation VI. I felt the name was perfect for this for multiple reasons:

- In Pokémon X and Y, Gogoat is used as a method of public transportation
- The project is written in Go
- The MBTA (which this project was originally based on) is commonly known as the "T", hence why the last T in "GogoaT" is capitalized (with all due respect to Stockholm, Pittsburgh, and the Twin Cities)

### Why Boston?

I chose Boston because that's where I'm from.

...And also because it's one of the more technologically "savvy" transit operations in the United States, plus the system is relatively small (Lord help me if I had to do some of what I did with the NYC Subway's >400 stations and platforms).
