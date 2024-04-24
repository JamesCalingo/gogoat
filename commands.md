# Commands

These are the commands you can use to have GogoaT fetch information for you. Where you see *italics* in the command list means to input some extra information into the command (usually a subway station).


(NOTE: these commands are case insensitive, so capitalization doesn't matter)

| Command  | What it does | Example | Works for |
|-|--|-|-|
| **map** | link to a live map of the MBTA subway system | | Subway |
| **info** \<*station name*\> | link to a station's web page for prediction info (subway and commuter rail)| *info Park Street* | Subway and Commuter Rail |
| **schedule** \<*line name/number*\> | link to the MBTA's schedule for that line  (subway, commuter rail, and bus) | *schedule 39* | Subway, Commuter Rail, and Bus
|**next** \<*station name*\> | get a list of the next predicted departures from a station<sup>n</sup>| *next Back Bay* | Subway
|**next** \<*station name*\> **to** \<*direction*\> | get the next predicted train from that station in the specified direction. The Red, Mattapan*, and Orange lines use north/south, while the Green and Blue lines use east/west (*Technically the Mattapan line is inbound/outbound, but this was easier to use)<sup>n</sup>| *next Reservoir to west* | Subway
|**next** \<*station name*\> **to** \<*destination*\> | get the next predicted train from that station to the specified destination<sup>n</sup>| *next Reservoir to Union Square* | Subway

n: some stations require the addition of which line you are taking (or branch if it's a Green Line station which multiple branches run through)