const solarSystem = document.getElementById("solarSystem")
const button = document.getElementById("button")
let newPlanetArray = []
const planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "color": "#d4d4d4"
    },
    {
        "name": "Venus",
        "diameter": 12104,
        "color": "#fffad1ff"
    },
    {
        "name": "Earth",
        "diameter": 12742,
        "color": "#e1f0e5ff"
    },
    {
        "name": "Mars",
        "diameter": 6779,
        "color": "#fbe6f4ff"
    },
    {
        "name": "Jupiter",
        "diameter": 139822,
        "color": "#fffad1ff"
    },
    {
        "name": "Saturn",
        "diameter": 116464,
        "color": "orange"
    },
    {
        "name": "Uranus",
        "diameter": 50724,
        "color": "#f5e6db"
    },
    {
        "name": "Neptune",
        "diameter": 49244,
        "color": "#b5caf9ff"
    },
    {
        "name": "Pluto",
        "diameter": 2370,
        "color": "white"
    }
]


function renderPlanets() {
    // console.log(planets)
    solarSystem.innerHTML = ""
    let noPlutoArray = planets.pop()
    console.log(planets)
    let newPlanet = {
        "name": "Goofy",
        "diameter": 33333,
        "color": "#Cfb53B"
    }
    newPlanetArray = planets.push(newPlanet)
    console.log(planets)


    console.log(planets)


    let indivPlanet = planets.forEach((planet) => {
        planet['rings'] = 0;
        planet['moons'] = 0
        if (planet.name == "Uranus") {
            planet['rings'] = 13
            planet['moons'] = 27
        } else if (planet.name == "Saturn") {
            planet['rings'] == 7
            planet['moons'] = 62
        } else if (planet.name == "Jupiter") {
            planet['rings'] = 3
            planet['moons'] = 67
        } else if (planet.name == "Neptune") {
            planet['rings'] = 6
            planet['moons'] = 14
        } else if (planet.name == "Earth") {
            planet['moons'] = 1
        } else if (planet.name == "Mars") {
            planet['moons'] = 2
        }


        let name = planet.name
        let diameter = planet.diameter / 1000
        let diameterFact = planet.diameter
        let color = planet.color
        let rings = planet.rings
        let moons = planet.moons



        console.log(planet)



        let planetDiv = document.createElement("div")
        planetDiv.classList.add("planetDiv")
        solarSystem.appendChild(planetDiv)

        let planetEl = document.createElement("div")
        planetEl.style.width = `${diameter}`
        planetEl.style.height = `${diameter}`
        planetEl.style.backgroundColor = `${color}`
        // planetEl.style.linearG
        planetEl.classList.add("planet")
        planetDiv.appendChild(planetEl)

        let overlay = document.createElement("div")
        overlay.style.backgroundColor = "transparent"
        overlay.style.width = `${diameter}`
        overlay.style.height = `${diameter}`
        overlay.classList.add("overlay")
        planetEl.appendChild(overlay)


        planetDiv.onmouseover = () => {
            if (planetInfo.classList.contains("hide")) {
                planetInfo.classList.remove("hide")
                planetInfo.classList.add("show")
            }
        }
        planetDiv.onmouseout = () => {
            if (planetInfo.classList.contains("show"))
                planetInfo.classList.remove("show")
            planetInfo.classList.add("hide")
        }

        let planetInfo = document.createElement("div")
        planetDiv.appendChild(planetInfo)
        planetInfo.classList.add("hide")
        planetInfo.classList.add("planetInfo")



        let planetName = document.createElement("p")
        planetName.innerHTML = `${name}`
        planetInfo.appendChild(planetName)
        planetName.style.color = `${color}`
        planetName.setAttribute("class", "info planetName")

        let planetDiameter = document.createElement("p")
        planetDiameter.innerHTML = `Diameter:  ${diameterFact}km`
        planetInfo.appendChild(planetDiameter)
        planetDiameter.setAttribute("class", "info planetDiameter")

        let planetRings = document.createElement("p")
        planetRings.innerHTML = `Number of rings: ${rings}`
        planetRings.setAttribute("class", "info planetRings")
        planetInfo.appendChild(planetRings)

        let planetMoons = document.createElement("p")
        planetMoons.innerHTML = `Number of moons: ${moons}`
        planetMoons.setAttribute("class", "info planet-moons")
        planetInfo.appendChild(planetMoons)



        // planets.forEach(planet => {
        //     console.log(planet)

        //     if (planet.name = "Uranus") {
        //         planet['rings'] = 13
        //     } else if (planet.name = "Jupiter") {
        //         planet['rings'] = 3
        //     } else if (planet.name = "Saturn") {
        //         planet['rings'] = 7
        //     } else if (planet.name = "Neptune") {
        //         planet['rings'] = 6

        //     } else {
        //         planets['rings'] = 0
        //     }
        // })




    })


}

renderPlanets()

