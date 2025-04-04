
const converter = document.getElementById("converter");
const weatherIcon = document.querySelector(".weather-icon");
const userLocation = document.getElementById("userLocation");
WEATHER_API_ENDPOINT = "http://api.weatherapi.com/v1/current.json?key=927baf2d296442549b3122200250304&q=";
WEATHER_DATA_ENDPOINT = "";



function findUserLocation() {
    const userLocation = document.getElementById("userLocation").value;
    fetch(WEATHER_API_ENDPOINT + `${userLocation}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const name = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const weatherIcon = data.current.condition.icon;


        document.getElementById("cityText").textContent = name;
        document.getElementById("countryText").textContent = country;
        document.getElementById("feverText").textContent = temperature + "°C";
        document.querySelector(".weather-icon").src = weatherIcon;
    });
}
