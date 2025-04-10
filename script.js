WEATHER_API_ENDPOINT = "http://api.weatherapi.com/v1/forecast.json?days=5&key=927baf2d296442549b3122200250304&q=";
LOCATION_API = "http://api.weatherapi.com/v1/ip.json?key=927baf2d296442549b3122200250304&q=";


const cities = [
    {name: "Tokyo", selector: ".left-temperature1"},
    {name: "Dubai", selector: ".left-temperature2"},
    {name: "Paris", selector: ".left-temperature3"},
    {name: "Bali", selector: ".left-temperature4"}
]

navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const locationQuery = `${lat},${lon}`;
    findUserLocation(locationQuery);
});

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
        const name = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const weatherIcon = data.current.condition.icon;
        const feelslikeC = data.current.feelslike_c;
        const humidity = data.current.humidity;
        const pressure = data.current.pressure_mb;
        const wind = data.current.wind_kph;

        const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
        const minTemp = data.forecast.forecastday[0].day.mintemp_c;
        const sunrise = data.forecast.forecastday[0].astro.sunrise;
        const sunset = data.forecast.forecastday[0].astro.sunset;

        console.log(data);
        for (i = 0; i < document.querySelectorAll(".icon-weather").length; i++) {
            const iconWeather = data.forecast.forecastday[0].hour[i].condition.icon;
            const tempWeather = data.forecast.forecastday[0].hour[i].temp_c;
            const windWeather = data.forecast.forecastday[0].hour[i].wind_kph;

            document.querySelectorAll(".icon-weather")[i].src = iconWeather;
            document.querySelectorAll(".temp-weather")[i].textContent = tempWeather;
            document.querySelectorAll(".wind-weather")[i].textContent = windWeather;
        }
        const time = data.location.localtime;

        document.getElementById("cityText").textContent = name;
        document.getElementById("leftCityText").textContent = name;
        document.getElementById("countryText").textContent = country;
        document.getElementById("leftCountryText").textContent = country;
        document.getElementById("temperatureText").textContent = temperature + "°C";
        document.getElementById("leftTemperatureText").textContent = temperature + "°C";
        document.querySelector(".weather-icon").src = weatherIcon;
        document.querySelector(".feelslike-c-text").textContent = feelslikeC;
        document.querySelector(".winds-kph-text").textContent = wind;
        document.querySelector(".humidity-text").textContent = humidity;
        document.querySelector(".pressure-text").textContent = pressure;
        document.querySelector(".max-temp-text").textContent = maxTemp + "°";
        document.querySelector(".min-temp-text").textContent = minTemp + "°";
        document.querySelector(".sunrise-text").textContent = sunrise;
        document.querySelector(".sunset-text").textContent = sunset;

        document.querySelector(".data-today").textContent = time.slice(0,10);
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

document.querySelectorAll(".city-and-temperature-group-list").forEach(cityElement => {
    cityElement.addEventListener("click", function() {
        const city = this.querySelector(".city-name").textContent;
        findUserLocation(city)
    })
})


function updateAllTemperatures() {
    cities.forEach(({name, selector}) => fetchTemperature(name, selector));
}

updateAllTemperatures();

setInterval(updateAllTemperatures, 100000);
