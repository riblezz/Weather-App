WEATHER_API_ENDPOINT = "http://api.weatherapi.com/v1/forecast.json?days=5&key=927baf2d296442549b3122200250304&q=";
// WEATHER_API_FORECAST = "http://api.weatherapi.com/v1/forecast.json?key=927baf2d296442549b3122200250304&q=";
// LOCATION_API = "https://api.opencagedata.com/geocode/v1/json?q=52.5432379%2C+13.4142133&key=6ccabc59726c4fd981540c5c27b5d48d";

fetch(WEATHER_API_ENDPOINT + "tokyo").then(response => response.json()).then(data => {
    console.log(data)
})

const cities = [
    {name: "Tokyo", selector: ".left-fever1"},
    {name: "Dubai", selector: ".left-fever2"},
    {name: "Paris", selector: ".left-fever3"},
    {name: "Bali", selector: ".left-fever4"}
]

function fetchTemperature(city, selector) {
    fetch(WEATHER_API_ENDPOINT + city)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temp_c;
        document.querySelector(selector).textContent = temperature + "°C"
    })
}

function findUserLocation(city) {
    fetch(WEATHER_API_ENDPOINT + city)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const name = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const weatherIcon = data.current.condition.icon;
        const feelslikeC = data.current.feelslike_c;
        const humidity = data.current.humidity;
        const pressure = data.current.pressure_mb;
        const wind = data.current.gust_kph;
        const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
        const minTemp = data.forecast.forecastday[0].day.mintemp_c;
        const sunrise = data.forecast.forecastday[0].astro.sunrise;
        const sunset = data.forecast.forecastday[0].astro.sunset;

        console.log(feelslikeC)
        document.getElementById("cityText").textContent = name;
        document.getElementById("leftCityText").textContent = name;
        document.getElementById("countryText").textContent = country;
        document.getElementById("leftCountryText").textContent = country;
        document.getElementById("feverText").textContent = temperature + "°C";
        document.getElementById("leftFeverText").textContent = temperature + "°C";
        document.querySelector(".weather-icon").src = weatherIcon;
        document.querySelector(".feelslike-c-text").textContent = feelslikeC;
        document.querySelector(".gusts-kph-text").textContent = wind;
        document.querySelector(".humidity-text").textContent = humidity;
        document.querySelector(".pressure-text").textContent = pressure;
        document.querySelector(".max-temp-text").textContent = maxTemp + "°";
        document.querySelector(".min-temp-text").textContent = minTemp + "°";
        document.querySelector(".sunrise-text").textContent = sunrise;
        document.querySelector(".sunset-text").textContent = sunset;
    });
}

document.querySelector(".search").addEventListener("click", function() {
    const userLocation = document.getElementById("userLocation").value;
    findUserLocation(userLocation)
})

document.getElementById("userLocation").addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const userLocation = document.getElementById("userLocation").value;
        findUserLocation(userLocation)
    }
})

document.querySelectorAll(".city-and-fever-group-list").forEach(cityElement => {
    cityElement.addEventListener("click", function() {
        const city = this.querySelector(".city-name").textContent;
        findUserLocation(city)
    })
})


function updateAllTemperatures() {
    cities.forEach(({name, selector}) => fetchTemperature(name, selector));
}

updateAllTemperatures();

setInterval(updateAllTemperatures, 60000)