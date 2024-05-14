const stations = [
    {
        "name": "Alewife",
        "alt_name": [""],
        "id": "place-alfcl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": ""
    },
    {
        "name": "Davis",
        "alt_name": [""],
        "id": "place-davis",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Porter",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-portr",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Harvard",
        "alt_name": ["Harvard Square"],
        "id": "place-harsq",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Central",
        "alt_name": ["Central Square"],
        "id": "place-cntsq",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Kendall",
        "alt_name": ["Kendall/MIT", "Kendall Square"],
        "id": "place-knncl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Charles/MGH",
        "alt_name": ["Charles", "MGH"],
        "id": "place-chmnl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Park Street (Red Line)",
        "alt_name": ["Park Street Red", "Park St Red", "Park Red"],
        "id": "place-pktrm",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Downtown Crossing (Red Line)",
        "alt_name": ["Downtown Crossing Red", "Downtown Xing Red", "DTX Red"],
        "id": "place-dwnxg",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "South Station",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-sstat",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Broadway",
        "alt_name": [""],
        "id": "place-brdwy",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Andrew",
        "alt_name": [""],
        "id": "place-andrw",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "JFK/UMass",
        "type": "subway/commuter",
        "alt_name": ["JFK"],
        "id": "place-jfk",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Savin Hill",
        "alt_name": [""],
        "id": "place-shmnl",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Fields Corner",
        "alt_name": [""],
        "id": "place-fldcr",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Shawmut",
        "alt_name": [""],
        "id": "place-smmnl",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Ashmont",
        "alt_name": ["Ashmont (Red Line), Ashmont Red"],
        "id": "place-asmnl",
        "line": "Red",
        "destination_0": "",
        "destination_1": "Alewife"
    },
    {
        "name": "North Quincy",
        "alt_name": [""],
        "id": "place-nqncy",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Wollaston",
        "alt_name": [""],
        "id": "place-wlsta",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Quincy Center",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-qnctr",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Quincy Adams",
        "alt_name": [""],
        "id": "place-qamnl",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Braintree",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-brntn",
        "line": "Red",
        "destination_0": "",
        "destination_1": "Alewife"
    },
    {
        "name": "Ashmont (Mattapan Line)",
        "alt_name": ["Ashmont Trolley"],
        "id": "place-asmnl",
        "line": "Red",
        "destination_0": "Mattapan",
        "destination_1": ""
    },
    {
        "name": "Cedar Grove",
        "alt_name": [""],
        "id": "place-cedgr",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Butler",
        "alt_name": [""],
        "id": "place-butlr",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Milton",
        "alt_name": [""],
        "id": "place-miltt",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Central Avenue",
        "alt_name": ["Central Ave", "Central Av"],
        "id": "place-cenav",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Valley Road",
        "alt_name": ["Valley Rd"],
        "id": "place-valrd",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Capen Street",
        "alt_name": ["Capen St", "Capen"],
        "id": "place-capst",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Mattapan",
        "alt_name": [""],
        "id": "place-matt",
        "line": "Mattapan",
        "destination_0": "",
        "destination_1": "Ashmont"
    },
    {
        "name": "Oak Grove",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-ogmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": ""
    },
    {
        "name": "Malden Center",
        "type": "subway/commuter",
        "alt_name": ["Malden"],
        "id": "place-mlmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Wellington",
        "alt_name": ["Welly"],
        "id": "place-welln",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Assembly",
        "alt_name": [""],
        "id": "place-astao",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Sullivan Square",
        "alt_name": ["Sullivan"],
        "id": "place-sull",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Community College",
        "alt_name": [""],
        "id": "place-ccmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "North Station (Orange Line)",
        "type": "subway/commuter",
        "alt_name": ["North Station Orange", "North Orange"],
        "id": "place-north",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Haymarket (Orange Line)",
        "alt_name": ["Haymarket Orange"],
        "id": "place-haecl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "State (Orange Line)",
        "alt_name": [
            "State Street (Orange Line)",
            "State St (Orange Line",
            "State Street Orange",
            "State St Orange",
            "State Orange"
        ],
        "id": "place-state",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Downtown Crossing (Orange Line)",
        "alt_name": [
            "Downtown Crossing Orange",
            "Downtown Xing Orange",
            "DTX Orange"
        ],
        "id": "place-dwnxg",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Chinatown",
        "alt_name": [""],
        "id": "place-chncl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Tufts Medical Center",
        "alt_name": ["Tufts Medical", "Tufts"],
        "id": "place-tumnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Back Bay",
        "type": "subway/commuter",
        "alt_name": ["Back Bay/South End", "Back Bay Station"],
        "id": "place-bbsta",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Massachusetts Avenue",
        "alt_name": ["Massachusetts Ave", "Mass Ave"],
        "id": "place-masta",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Ruggles",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-rugg",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Roxbury Crossing",
        "alt_name": ["Roxbury Xing", "Roxbury"],
        "id": "place-rcmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Jackson Square",
        "alt_name": ["Jackson Sq", "Jackson"],
        "id": "place-jaksn",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Stony Brook",
        "alt_name": [""],
        "id": "place-sbmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Green Street",
        "alt_name": ["Green St"],
        "id": "place-grnst",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Forest Hills",
        "type": "subway/commuter",
        "alt_name": [""],
        "id": "place-forhl",
        "line": "Orange",
        "destination_0": "",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Wonderland",
        "alt_name": [""],
        "id": "place-wondl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": ""
    },
    {
        "name": "Revere Beach",
        "alt_name": [""],
        "id": "place-rbmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Beachmont",
        "alt_name": [""],
        "id": "place-bmmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Suffolk Downs",
        "alt_name": [""],
        "id": "place-sdmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Orient Heights",
        "alt_name": ["Orient"],
        "id": "place-orhte",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Wood Island",
        "alt_name": [""],
        "id": "place-wimnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Airport",
        "alt_name": [""],
        "id": "place-aport",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Maverick",
        "alt_name": ["Mav"],
        "id": "place-mvbcl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Aquarium",
        "alt_name": [""],
        "id": "place-aqucl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "State (Blue Line)",
        "alt_name": [
            "State Street (Blue Line)",
            "State St (Blue Line)",
            "State Street Blue",
            "State St Blue",
            "State Blue"
        ],
        "id": "place-state",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Government Center (Blue Line)",
        "alt_name": ["Government Center Blue", "Gov Center Blue", "GC Blue"],
        "id": "place-gover",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Bowdoin",
        "alt_name": [""],
        "id": "place-bomnl",
        "line": "Blue",
        "destination_0": "",
        "destination_1": "Wonderland"
    },
    {
        "name": "Medford/Tufts",
        "alt_name": ["Medford"],
        "id": "place-mdftf",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": ""
    },
    {
        "name": "Ball Square",
        "alt_name": ["Ball Sq"],
        "id": "place-balsq",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Magoun Square",
        "alt_name": ["Magoun Sq", "Magoun"],
        "id": "place-mgngl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Gilman Square",
        "alt_name": ["Gilman Sq", "Gilman"],
        "id": "place-gilmn",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "East Somerville",
        "alt_name": [""],
        "id": "place-esomr",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Lechmere (E)",
        "alt_name": [""],
        "id": "place-lech",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Science Park/West End (E)",
        "alt_name": ["Science Park E"],
        "id": "place-spmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "North Station (E)",
        "type": "subway/commuter",
        "alt_name": ["North Station E", "North E"],
        "id": "place-north",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Haymarket (E)",
        "alt_name": ["Haymarket E"],
        "id": "place-haecl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Government Center (E)",
        "alt_name": ["Government Center E", "Gov Center E", "GC E"],
        "id": "place-gover",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Park Street (E)",
        "alt_name": ["Park Street E", "Park St E", "Park E"],
        "id": "place-pktrm",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Boylston (E)",
        "alt_name": ["Boylston E"],
        "id": "place-boyls",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Arlington (E)",
        "alt_name": ["Arlington E"],
        "id": "place-armnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Copley (E)",
        "alt_name": ["Copley E"],
        "id": "place-coecl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Prudential",
        "alt_name": ["Pru"],
        "id": "place-prmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Symphony",
        "alt_name": [""],
        "id": "place-symcl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Northeastern",
        "alt_name": ["NU"],
        "id": "place-nuniv",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Museum of Fine Arts",
        "alt_name": ["MFA"],
        "id": "place-mfa",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Longwood Medical Area",
        "alt_name": ["Longwood Medical"],
        "id": "place-lngmd",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Brigham Circle",
        "alt_name": ["Brigham"],
        "id": "place-brmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Fenwood Road",
        "alt_name": ["Fenwood Rd", "Fenwood"],
        "id": "place-fenwd",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Mission Park",
        "alt_name": [""],
        "id": "place-mispk",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Riverway",
        "alt_name": [""],
        "id": "place-rvrwy",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Back of the Hill",
        "alt_name": [""],
        "id": "place-bckhl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Heath Street",
        "alt_name": [
            "Heath St",
            "Heath",
            "Heath Street/VA Medical Center",
            "Heath St/VA Medical Center"
        ],
        "id": "place-hsmnl",
        "line": "Green-E",
        "destination_0": "",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Union Square",
        "alt_name": ["Union Sq", "Union"],
        "id": "place-unsqu",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": ""
    },
    {
        "name": "Lechmere (D)",
        "alt_name": ["Lechmere D"],
        "id": "place-lech",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Science Park/West End (D)",
        "alt_name": ["Science Park D"],
        "id": "place-spmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "North Station (D)",
        "type": "subway/commuter",
        "alt_name": ["North Station D", "North Green"],
        "id": "place-north",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Haymarket (D)",
        "alt_name": ["Haymarket D"],
        "id": "place-haecl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Government Center (D)",
        "alt_name": ["Government Center D", "Gov Center D", "GC D"],
        "id": "place-gover",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Park Street (D)",
        "alt_name": ["Park Street D", "Park St D", "Park D"],
        "id": "place-pktrm",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Boylston (D)",
        "alt_name": ["Boylston D"],
        "id": "place-boyls",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Arlington (D)",
        "alt_name": ["Arlington D"],
        "id": "place-armnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Copley (D)",
        "alt_name": ["Copley D"],
        "id": "place-coecl",
        "line": "Green-D",
        "destination_0": "Boston College/Cleveland Circle/Riverside",
        "destination_1": "Government Center/Union Square/Medford"
    },
    {
        "name": "Hynes Convention Center (D)",
        "alt_name": ["Hynes Convention Center D", "Hynes D"],
        "id": "place-hymnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Kenmore (D)",
        "alt_name": ["Kenmore D"],
        "id": "place-kencl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Fenway",
        "alt_name": [""],
        "id": "place-fenwy",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Longwood",
        "alt_name": [""],
        "id": "place-longw",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Brookline Village",
        "alt_name": [""],
        "id": "place-bvmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Brookline Hills",
        "alt_name": [""],
        "id": "place-brkhl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Beaconfield",
        "alt_name": [""],
        "id": "place-bcnfd",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Reservoir",
        "alt_name": [""],
        "id": "place-rsmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Chestnut Hill",
        "alt_name": [""],
        "id": "place-chhil",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Newton Centre",
        "alt_name": ["Newton Center"],
        "id": "place-newto",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Newton Highlands",
        "alt_name": [""],
        "id": "place-newtn",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Eliot",
        "alt_name": [""],
        "id": "place-eliot",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Waban",
        "alt_name": [""],
        "id": "place-waban",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Woodland",
        "alt_name": [""],
        "id": "place-woodl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Riverside",
        "alt_name": [""],
        "id": "place-river",
        "line": "Green-D",
        "destination_0": "",
        "destination_1": "Union Square"
    },
    {
        "name": "Government Center (C)",
        "alt_name": ["Government Center C", "Gov Center C", "GC C"],
        "id": "place-gover",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": ""
    },
    {
        "name": "Park Street (C)",
        "alt_name": ["Park Street C", "Park St C", "Park C"],
        "id": "place-pktrm",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Boylston (C)",
        "alt_name": ["Boylston C"],
        "id": "place-boyls",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Arlington (C)",
        "alt_name": ["Arlington C"],
        "id": "place-armnl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Copley (C)",
        "alt_name": ["Copley C"],
        "id": "place-coecl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Hynes Convention Center (C)",
        "alt_name": ["Hynes Convention Center C", "Hynes C"],
        "id": "place-hymnl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Kenmore (C)",
        "alt_name": ["Kenmore C"],
        "id": "place-kencl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Saint Mary's Street",
        "alt_name": [
            "Saint Marys Street",
            "Saint Mary's St",
            "Saint Marys St",
            "Saint Mary's",
            "Saint Marys",
            "St Mary's Street",
            "St Marys Street",
            "St Mary's St",
            "St Marys St",
            "St Mary's",
            "St Marys",
            "St. Mary's Street",
            "St. Marys Street",
            "St. Mary's St",
            "St. Marys St",
            "St. Mary's",
            "St. Marys"
        ],
        "id": "place-smary",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Hawes Street",
        "alt_name": ["Hawes St", "Hawes"],
        "id": "place-hwsst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Kent Street",
        "alt_name": ["Kent St", "Kent"],
        "id": "place-kntst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Saint Paul Street",
        "alt_name": [
            "Saint Paul St",
            "Saint Paul",
            "St Paul Street",
            "St Paul St",
            "St Paul",
            "St. Paul Street",
            "St. Paul St",
            "St. Paul"
        ],
        "id": "place-stpul",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Coolidge Corner",
        "alt_name": ["Coolidge"],
        "id": "place-cool",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Summit Avenue",
        "alt_name": [
            "Summit Ave",
            "Summit Av",
            "Summit",
            "Winchester Street",
            "Winchester St",
            "Winchester/Summit"
        ],
        "id": "place-sumav",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Brandon Hall",
        "alt_name": [""],
        "id": "place-bndhl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Fairbanks Street",
        "alt_name": ["Fairbanks St", "Fairbanks"],
        "id": "place-fbkst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Washington Square",
        "alt_name": ["Washington Sq"],
        "id": "place-bcnwa",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Tappan Street",
        "alt_name": ["Tappan St", "Tappan"],
        "id": "place-tapst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Dean Road",
        "alt_name": ["Dean Rd"],
        "id": "place-denrd",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Englewood Avenue",
        "alt_name": ["Englewood Ave", "Englewood Av", "Englewood"],
        "id": "place-engav",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Cleveland Circle",
        "alt_name": [""],
        "id": "place-clmnl",
        "line": "Green-C",
        "destination_0": "",
        "destination_1": "Government Center"
    },
    {
        "name": "Government Center (B)",
        "alt_name": ["Government Center B", "Gov Center B", "GC B"],
        "id": "place-gover",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": ""
    },
    {
        "name": "Park Street (B)",
        "alt_name": ["Park Street B", "Park St B", "Park B"],
        "id": "place-pktrm",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boylston (B)",
        "alt_name": ["Boylston B"],
        "id": "place-boyls",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Arlington (B)",
        "alt_name": ["Arlington B"],
        "id": "place-armnl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Copley (B)",
        "alt_name": ["Copley B"],
        "id": "place-coecl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Hynes Convention Center (B)",
        "alt_name": ["Hynes Convention Center B", "Hynes B"],
        "id": "place-hymnl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Kenmore (B)",
        "alt_name": ["Kenmore B"],
        "id": "place-kencl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Blandford Street",
        "alt_name": ["Blandford St", "Blandford"],
        "id": "place-bland",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston University East",
        "alt_name": ["BU East"],
        "id": "place-buest",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston University Central",
        "alt_name": ["BU Central"],
        "id": "place-bucen",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Amory Street",
        "alt_name": ["Amory St", "Amory", "Boston University West", "BU West"],
        "id": "place-amory",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Babcock Street",
        "alt_name": ["Babcock St", "Babcock", "Pleasant Street", "Pleasant St"],
        "id": "place-babck",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Packard's Corner",
        "alt_name": [
            "Packard's",
            "Packards",
            "Brighton Avenue",
            "Brighton Ave",
            "Brighton Av"
        ],
        "id": "place-brico",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Harvard Avenue",
        "alt_name": ["Harvard Ave", "Harvard Av"],
        "id": "place-harvd",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Griggs Street",
        "id": "place-grigg",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Allston Street",
        "alt_name": ["Allston St"],
        "id": "place-alsgr",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Warren Street",
        "alt_name": ["Warren St", "Warren"],
        "id": "place-wrnst",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Washington Street",
        "alt_name": ["Washington St"],
        "id": "place-wascm",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Sutherland Road",
        "alt_name": ["Sutherland Rd", "Sutherland"],
        "id": "place-sthld",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Chiswick Road",
        "alt_name": ["Chiswick Rd", "Chiswick"],
        "id": "place-chswk",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Chestnut Hill Avenue",
        "alt_name": ["Chestnut Hill Ave", "Chestnut Hill Av"],
        "id": "place-chill",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "South Street",
        "alt_name": ["South St"],
        "id": "place-sougr",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston College",
        "alt_name": ["BC", "Lake Street", "Lake St", "Lake"],
        "id": "place-lake",
        "line": "Green-B",
        "destination_0": "",
        "destination_1": "Government Center"
    }
]

stations.sort((a, b) => {
    if (a.name < b.name) return -1
    return 1
})

function createOption(station) {
    const option = document.createElement("option")
    option.textContent = station.name ? station.name : station
    option.value = station.name ? station.name : station
    return option
}

const origin = document.querySelector("#origin")
stations.forEach(station => {
    option = createOption(station)
    origin.appendChild(option)
})

let start = origin.value
const destination = document.querySelector("#destination")
let destinations = []

function findDestinations(stations, origin) {
    start = origin
    destination.innerHTML = "<option disabled display=\"none\" selected>Select a station</option>"
    console.log(origin)
    const station = stations.find(station => station.name == origin)
    if (!station) return
    const destinationOptions = [station.destination_0, station.destination_1]
    destinationOptions.forEach(station => {
        if (station) {
            option = createOption(station)
            destination.appendChild(option)
        } else {
            option = createOption("---")
            option.disabled = true
            destination.appendChild(option)
        }
    })
    document.querySelector("#second").hidden = false
    destinations = destinationOptions
}


function index(array, selected) {
    document.querySelector("#buttondiv").hidden = false
    return array.indexOf(selected)
}

function predict(start) {
    const stop = stations.find(station => station.name === start)
    if (!stop) return
    let directionID = index(destinations, destination.value)
    fetch(`https://api-v3.mbta.com/predictions?sort=departure_time&page[limit]=5&filter[stop]=${stop.id}&filter[route]=${stop.line}&filter[direction_id]=${directionID}&filter[revenue]=REVENUE`)
        .then(res => {
            res.json()
                .then(data => {
                    let next = data.data.find((elem) => new Date(elem.attributes.arrival_time).getTime() > new Date().getTime())
                    if(next) {
                    document.querySelector("#info").innerHTML = `Your next train should be arriving arround ${new Date(next.attributes.arrival_time).toLocaleTimeString()}`}
                    else {
                        document.querySelector("#info").innerHTML = "No prediction found."
                    }
                })
        })
}

const button = document.querySelector("button")
button.addEventListener("click", () => predict(start))