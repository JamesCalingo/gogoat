const stations = [
    {
        "name": "Alewife",
        "id": "place-alfcl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": ""
    },
    {
        "name": "Davis",
        "id": "place-davis",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Porter",
        "id": "place-portr",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Harvard",
        "id": "place-harsq",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Central",
        "id": "place-cntsq",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Kendall",
        "id": "place-knncl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Charles/MGH",
        "id": "place-chmnl",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Park Street (Red Line)",
        "id": "place-pktrm",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Downtown Crossing (Red Line)",
        "id": "place-dwnxg",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "South Station",
        "id": "place-sstat",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Broadway",
        "id": "place-brdwy",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Andrew",
        "id": "place-andrw",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "JFK/UMass",
        "id": "place-jfk",
        "line": "Red",
        "destination_0": "Ashmont/Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Savin Hill",
        "id": "place-shmnl",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Fields Corner",
        "id": "place-fldcr",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Shawmut",
        "id": "place-smmnl",
        "line": "Red",
        "destination_0": "Ashmont",
        "destination_1": "Alewife"
    },
    {
        "name": "Ashmont (Red Line)",
        "id": "place-asmnl",
        "line": "Red",
        "destination_0": "",
        "destination_1": "Alewife"
    },
    {
        "name": "North Quincy",
        "id": "place-nqncy",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Wollaston",
        "id": "place-wlsta",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Quincy Center",
        "id": "place-qnctr",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Quincy Adams",
        "id": "place-qamnl",
        "line": "Red",
        "destination_0": "Braintree",
        "destination_1": "Alewife"
    },
    {
        "name": "Braintree",
        "id": "place-brntn",
        "line": "Red",
        "destination_0": "",
        "destination_1": "Alewife"
    },
    {
        "name": "Ashmont (Mattapan Line)",
        "id": "place-asmnl",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": ""
    },
    {
        "name": "Cedar Grove",
        "id": "place-cedgr",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Butler",
        "id": "place-butlr",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Milton",
        "id": "place-miltt",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Central Avenue",
        "id": "place-cenav",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Valley Road",
        "id": "place-valrd",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Capen Street",
        "id": "place-capst",
        "line": "Mattapan",
        "destination_0": "Mattapan",
        "destination_1": "Ashmont"
    },
    {
        "name": "Mattapan",
        "id": "place-matt",
        "line": "Mattapan",
        "destination_0": "",
        "destination_1": "Ashmont"
    },
    {
        "name": "Oak Grove",
        "id": "place-ogmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": ""
    },
    {
        "name": "Malden Center",
        "id": "place-mlmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Wellington",
        "id": "place-welln",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Assembly",
        "id": "place-astao",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Sullivan Square",
        "id": "place-sull",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Community College",
        "id": "place-ccmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "North Station (Orange Line)",
        "id": "place-north",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Haymarket (Orange Line)",
        "id": "place-haecl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "State (Orange Line)",
        "id": "place-state",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Downtown Crossing (Orange Line)",
        "id": "place-dwnxg",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Chinatown",
        "id": "place-chncl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Tufts Medical Center",
        "id": "place-tumnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Back Bay",
        "id": "place-bbsta",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Massachusetts Avenue",
        "id": "place-masta",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Ruggles",
        "id": "place-rugg",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Roxbury Crossing",
        "id": "place-rcmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Jackson Square",
        "id": "place-jaksn",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Stony Brook",
        "id": "place-sbmnl",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Green Street",
        "id": "place-grnst",
        "line": "Orange",
        "destination_0": "Forest Hills",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Forest Hills",
        "id": "place-forhl",
        "line": "Orange",
        "destination_0": "",
        "destination_1": "Oak Grove"
    },
    {
        "name": "Wonderland",
        "id": "place-wondl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": ""
    },
    {
        "name": "Revere Beach",
        "id": "place-rbmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Beachmont",
        "id": "place-bmmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Suffolk Downs",
        "id": "place-sdmnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Orient Heights",
        "id": "place-orhte",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Wood Island",
        "id": "place-wimnl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Airport",
        "id": "place-aport",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Maverick",
        "id": "place-mvbcl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Aquarium",
        "id": "place-aqucl",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "State (Blue Line)",
        "id": "place-state",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Government Center (Blue Line)",
        "id": "place-gover",
        "line": "Blue",
        "destination_0": "Bowdoin",
        "destination_1": "Wonderland"
    },
    {
        "name": "Bowdoin",
        "id": "place-bomnl",
        "line": "Blue",
        "destination_0": "",
        "destination_1": "Wonderland"
    },
    {
        "name": "Medford/Tufts",
        "id": "place-mdftf",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": ""
    },
    {
        "name": "Ball Square",
        "id": "place-balsq",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Magoun Square",
        "id": "place-mgngl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Gilman Square",
        "id": "place-gilmn",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "East Somerville",
        "id": "place-esomr",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Lechmere (E)",
        "id": "place-lech",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Science Park/West End (E)",
        "id": "place-spmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "North Station (E)",
        "id": "place-north",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Haymarket (E)",
        "id": "place-haecl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Government Center (E)",
        "id": "place-gover",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Park Street (E)",
        "id": "place-pktrm",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Boylston (E)",
        "id": "place-boyls",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Arlington (E)",
        "id": "place-armnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Copley (E)",
        "id": "place-coecl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Prudential",
        "id": "place-prmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Symphony",
        "id": "place-symcl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Northeastern",
        "id": "place-nuniv",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Museum of Fine Arts",
        "id": "place-mfa",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Longwood Medical Area",
        "id": "place-lngmd",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Brigham Circle",
        "id": "place-brmnl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Fenwood Road",
        "id": "place-fenwd",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Mission Park",
        "id": "place-mispk",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Riverway",
        "id": "place-rvrwy",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Back of the Hill",
        "id": "place-bckhl",
        "line": "Green-E",
        "destination_0": "Heath Street",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Heath Street",
        "id": "place-hsmnl",
        "line": "Green-E",
        "destination_0": "",
        "destination_1": "Medford/Tufts"
    },
    {
        "name": "Union Square",
        "id": "place-unsqu",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": ""
    },
    {
        "name": "Lechmere (D)",
        "id": "place-lech",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Science Park/West End (D)",
        "id": "place-spmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "North Station (D)",
        "id": "place-north",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Haymarket (D)",
        "id": "place-haecl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Government Center (D)",
        "id": "place-gover",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Park Street (D)",
        "id": "place-pktrm",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Boylston (D)",
        "id": "place-boyls",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Arlington (D)",
        "id": "place-armnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Copley (D)",
        "id": "place-coecl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Hynes Convention Center (D)",
        "id": "place-hymnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Kenmore (D)",
        "id": "place-kencl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Fenway",
        "id": "place-fenwy",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Longwood",
        "id": "place-longw",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Brookline Village",
        "id": "place-bvmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Brookline Hills",
        "id": "place-brkhl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Beaconfield",
        "id": "place-bcnfd",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Reservoir",
        "id": "place-rsmnl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Chestnut Hill",
        "id": "place-chhil",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Newton Centre",
        "id": "place-newto",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Newton Highlands",
        "id": "place-newtn",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Eliot",
        "id": "place-eliot",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Waban",
        "id": "place-waban",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Woodland",
        "id": "place-woodl",
        "line": "Green-D",
        "destination_0": "Riverside",
        "destination_1": "Union Square"
    },
    {
        "name": "Riverside",
        "id": "place-river",
        "line": "Green-D",
        "destination_0": "",
        "destination_1": "Union Square"
    },
    {
        "name": "Government Center (C)",
        "id": "place-gover",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": ""
    },
    {
        "name": "Park Street (C)",
        "id": "place-pktrm",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Boylston (C)",
        "id": "place-boyls",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Arlington (C)",
        "id": "place-armnl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Copley (C)",
        "id": "place-coecl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Hynes Convention Center (C)",
        "id": "place-hymnl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Kenmore (C)",
        "id": "place-kencl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Saint Mary's Street",
        "id": "place-smary",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Hawes Street",
        "id": "place-hwsst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Kent Street",
        "id": "place-kntst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Saint Paul Street",
        "id": "place-stpul",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Coolidge Corner",
        "id": "place-cool",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Summit Avenue",
        "id": "place-sumav",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Brandon Hall",
        "id": "place-bndhl",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Fairbanks Street",
        "id": "place-fbkst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Washington Square",
        "id": "place-bcnwa",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Tappan Street",
        "id": "place-tapst",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Dean Road",
        "id": "place-denrd",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Englewood Avenue",
        "id": "place-engav",
        "line": "Green-C",
        "destination_0": "Cleveland Circle",
        "destination_1": "Government Center"
    },
    {
        "name": "Cleveland Circle",
        "id": "place-clmnl",
        "line": "Green-C",
        "destination_0": "",
        "destination_1": "Government Center"
    },
    {
        "name": "Government Center (B)",
        "id": "place-gover",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": ""
    },
    {
        "name": "Park Street (B)",
        "id": "place-pktrm",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boylston (B)",
        "id": "place-boyls",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Arlington (B)",
        "id": "place-armnl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Copley (B)",
        "id": "place-coecl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Hynes Convention Center (B)",
        "id": "place-hymnl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Kenmore (B)",
        "id": "place-kencl",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Blandford Street",
        "id": "place-bland",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston University East",
        "id": "place-buest",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston University Central",
        "id": "place-bucen",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Amory Street",
        "id": "place-amory",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Babcock Street",
        "id": "place-babck",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Packard's Corner",
        "id": "place-brico",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Harvard Avenue",
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
        "id": "place-alsgr",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Warren Street",
        "id": "place-wrnst",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Washington Street",
        "id": "place-wascm",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Sutherland Road",
        "id": "place-sthld",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Chiswick Road",
        "id": "place-chswk",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Chestnut Hill Avenue",
        "id": "place-chill",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "South Street",
        "id": "place-sougr",
        "line": "Green-B",
        "destination_0": "Boston College",
        "destination_1": "Government Center"
    },
    {
        "name": "Boston College",
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
                    document.querySelector(".info").innerHTML = `Your train should be arriving arround<br>
                    <span class="time ${stop.line.toLowerCase()}">${new Date(next.attributes.arrival_time).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}</span>`}
                    else {
                        document.querySelector(".info").innerHTML = "No prediction found."
                    }
                })
        })
}

const button = document.querySelector("button")
button.addEventListener("click", () => predict(start))