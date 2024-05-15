// function createOption(station) {
//     const option = document.createElement("option")
//     option.textContent = station.name ? station.name : station
//     option.value = station.name ? station.name : station
//     return option
// }

// const origin = document.querySelector("#origin")
// subway.forEach(station => {
//     option = createOption(station)
//     origin.appendChild(option)
// })

// let start = origin.value
// const destination = document.querySelector("#destination")
// let destinations = []

// function findDestinations(stations, origin) {
//     start = origin
//     destination.innerHTML = "<option disabled display=\"none\" selected>Select a station</option>"
//     console.log(origin)
//     const station = stations.find(station => station.name == origin)
//     if (!station) return
//     const destinationOptions = [station.destination_0, station.destination_1]
//     destinationOptions.forEach(station => {
//         if (station) {
//             option = createOption(station)
//             destination.appendChild(option)
//         } else {
//             option = createOption("---")
//             option.disabled = true
//             destination.appendChild(option)
//         }
//     })
//     document.querySelector("#second").hidden = false
//     destinations = destinationOptions
// }


// function index(array, selected) {
//     document.querySelector("#buttondiv").hidden = false
//     return array.indexOf(selected)
// }

// function predict(start) {
//     const stop = subway.find(station => station.name === start)
//     if (!stop) return
//     let directionID = index(destinations, destination.value)
//     fetch(`https://api-v3.mbta.com/predictions?sort=departure_time&page[limit]=5&filter[stop]=${stop.id}&filter[route]=${stop.line}&filter[direction_id]=${directionID}&filter[revenue]=REVENUE`)
//         .then(res => {
//             res.json()
//                 .then(data => {
//                     let next = data.data.find((elem) => new Date(elem.attributes.arrival_time).getTime() > new Date().getTime())
//                     if(next) {
//                     document.querySelector("#info").innerHTML = `Your next train should be arriving arround ${new Date(next.attributes.arrival_time).toLocaleTimeString()}`}
//                     else {
//                         document.querySelector("#info").innerHTML = "No prediction found."
//                     }
//                 })
//         })
// }

// const button = document.querySelector("button")
// button.addEventListener("click", () => predict(start))

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

  const toggle = document.querySelector(".toggle")
  toggle.addEventListener("click", () => {
    const body = document.querySelector("body")
    if(!body.classList.contains("dark")) {
    body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }
  })