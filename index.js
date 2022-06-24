const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "color": "grey"
    },
    {
        "name": "Venus",
        "diameter": 12104,
        "color": "yellow"
    },
    {
        "name": "Earth",
        "diameter": 12742,
        "color": "green"
    },
    {
        "name": "Mars",
        "diameter": 6779,
        "color": "pink"
    },
    {
        "name": "Jupiter",
        "diameter": 139822,
        "color": "yellow"
    },
    {
        "name": "Saturn",
        "diameter": 116464,
        "color": "orange"
    },
    {
        "name": "Uranus",
        "diameter": 50724,
        "color": "grey"
    },
    {
        "name": "Neptune",
        "diameter": 49244,
        "color": "blue"
    },
    {
        "name": "Pluto",
        "diameter": 2370,
        "color": "white"
    }
]

const planetFacts = [
    {
        "name": "Mercury",
        "moons": 0,
        "surfaceGravity": 3.70,
        "rings": 0
    },
    {
        "name": "Venus",
        "moons": 0,
        "surfaceGravity": 8.87,
        "rings": 0
    },
    {
        "name": "Earth",
        "moons": 1,
        "surfaceGravity": 9.87,
        "rings": 0
    },
    {
        "name": "Mars",
        "moons": 2,
        "surfaceGravity": 3.72,
        "rings": 0
    },
    {
        "name": "Jupiter",
        "moons": 67,
        "surfaceGravity": 24.79,
        "rings": "YES"
    },
    {
        "name": "Saturn",
        "moons": 62,
        "surfaceGravity": 10.44,
        "rings": "YES"
    },
    {
        "name": "Uranus",
        "moons": 27,
        "surfaceGravity": 8.87,
        "rings": "YES"
    },
    {
        "name": "Neptune",
        "moons": 14,
        "surfaceGravity": 11.15,
        "rings": "YES"
    },
    {
        "name": "Eris",
        "moons": 0,
        "surfaceGravity": 0.084,
        "rings": 0
    }
]




const Eris = {
    "name": "Eris",
    "diameter": 2326,
    "color": "red"
}



function renderPlanets(planets) {
    for (let i = 0; i < planets.length; i++) {
        const planet = document.createElement("div")
        planet.style.minHeight = `${planets[i].diameter / 1000}px`
        planet.style.minWidth = `${planets[i].diameter / 1000}px`
        planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`
        planet.classList.add("planet")
        //-----------------
        const planetFactsInfo = document.createElement("div")
        planetFactsInfo.className = "info"
        planetFactsInfo.innerHTML =
            `<p>
                Planet name: ${planets[i].name}, <br>
                Planet diameter: ${planets[i].diameter} km<br>
                ${planets[i].moons === 0 ? `` : `Planet moons: ${planets[i].moons}<br>`}
                Planet surface gravity: ${planets[i].surfaceGravity} m/s\u00B2<br>
                ${planets[i].rings === 0 || planets[i].rings === "" ? '' : `Planet rings: ${planets[i].rings}`}
                </p>`
        planet.appendChild(planetFactsInfo)
        planetInfo(planet, planetFactsInfo)
        //-----------------
        solarSystem.appendChild(planet)
    }
}


function addRemovePlanet(array, index, item, newPlanet) {
    return array.splice(index, item, newPlanet)
}

function updatePlanets(planets, planetsFacts) {
    planets.forEach(planet => {
        planetsFacts.forEach(fact => {
            if (planet.name === fact.name) {
                planet["moons"] = fact.moons
                planet["surfaceGravity"] = fact.surfaceGravity
                planet["rings"] = fact.rings
            }
        })
    })
    return planets
}

const planetInfo = (planet, planetFactsInfo) => {
    planet.addEventListener("mouseenter", ev => {
        ev.preventDefault();
        planetFactsInfo.classList.toggle("active");

    });
    planet.addEventListener("mouseleave", ev => {
        ev.preventDefault();
        planetFactsInfo.classList.toggle("active");

    })
}

addRemovePlanet(planets, 8, 1)
addRemovePlanet(planets, 8, 1, Eris)
updatePlanets(planets, planetFacts)
renderPlanets(planets)

// Task:
// 1. Remove Pluto from the planets array
// 2. Add a new planet to the planets array (invent one)

// NOTE: these should be done without changing the code above line 50

// Stretch goals:
// - 1. Add a new fact to one of the planets, e.g surfaceGravity it has rings.
// - 2. Add the moons to each planet (see previous challenge for the numbers of moons required.)

// What did you think? 🧑‍🚀

// https://form.typeform.com/to/AbIFTOMS