WEATHER_API_ENDPOINT = "http://api.weatherapi.com/v1/current.json?key=927baf2d296442549b3122200250304&q=";
WEATHER_DATA_ENDPOINT = "";


fetch(WEATHER_API_ENDPOINT + "Tokyo")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temperature = data.current.temp_c;
        document.querySelector(".left-fever1").textContent = temperature + "°C"
    })

fetch(WEATHER_API_ENDPOINT + "Dubai")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temperature = data.current.temp_c;
        document.querySelector(".left-fever2").textContent = temperature + "°C"
    })

fetch(WEATHER_API_ENDPOINT + "Paris")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temperature = data.current.temp_c;
        document.querySelector(".left-fever3").textContent = temperature + "°C"
    })


fetch(WEATHER_API_ENDPOINT + "Bali")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temperature = data.current.temp_c;
        document.querySelector(".left-fever4").textContent = temperature + "°C"
    })

function findUserLocation(city) {
    fetch(WEATHER_API_ENDPOINT + city)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const name = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const weatherIcon = data.current.condition.icon;


        document.getElementById("cityText").textContent = name;
        document.getElementById("leftCityText").textContent = name;
        document.getElementById("countryText").textContent = country;
        document.getElementById("leftCountryText").textContent = country;
        document.getElementById("feverText").textContent = temperature + "°C";
        document.getElementById("leftFeverText").textContent = temperature + "°C";
        document.querySelector(".weather-icon").src = weatherIcon;
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
