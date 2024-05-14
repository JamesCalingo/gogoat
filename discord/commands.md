# Commands

These are the commands you can use to have GogoaT fetch information for you. Where you see *italics* in the command list means to input some extra information into the command (usually a subway station).


(NOTE: these commands are case insensitive, so capitalization doesn't matter)

| Command  | What it does | Example | Works for |
|-|--|-|-|
| **map** | link to a live map of the MBTA subway system | | Subway |
| **info** \<*station name*\> | link to a station's web page for prediction info (subway and commuter rail)| *info Park Street* | Subway and Commuter Rail |
| **schedule** \<*line name/number*\> | link to the MBTA's schedule for that line  (subway, commuter rail, and bus) | subway: *schedule <br>bus: *schedule 39* | Subway, Commuter Rail, and Bus
|**next** \<*station name*\> | get a list of the next predicted departures from a station<sup>1</sup>| *next Chinatown* | Subway and Commuter Rail
|**next** \<*station name*\> **to** \<*direction*\> | get the next predicted train from that station in the specified direction. The Red, Mattapan*, and Orange lines use north/south, while the Green and Blue lines use east/west and Commuter Rail is outbound/inbound (or Boston) (*Technically the Mattapan line is inbound/outbound, but this was easier to use)<sup>1</sup>| For subway: *next Reservoir to west*<br>For commuter rail: *next Route 128 to outbound*<sup>2</sup> | Subway and Commuter Rail
|**next** \<*station name*\> **to** \<*destination*\> | get the next predicted train from that station to the specified destination<sup>1</sup>| *next Reservoir to Union Square* | Subway

1: some stations require the addition of which line you are taking (or branch if it's a Green Line station which multiple branches run through)

2: I realize this looks awkward, but this current version has things that rely on this specific formatting.
