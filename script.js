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





        const iconDownZero = data.forecast.forecastday[0].hour[0].condition.icon;
        const tempDownZero = data.forecast.forecastday[0].hour[0].temp_c;
        const windDownZero = data.forecast.forecastday[0].hour[0].gust_kph;

        const iconDownOne = data.forecast.forecastday[0].hour[1].condition.icon;
        const tempDownOne = data.forecast.forecastday[0].hour[1].temp_c;
        const windDownOne = data.forecast.forecastday[0].hour[1].gust_kph;

        const iconDownTwo = data.forecast.forecastday[0].hour[2].condition.icon;
        const tempDownTwo = data.forecast.forecastday[0].hour[2].temp_c;
        const windDownTwo = data.forecast.forecastday[0].hour[2].gust_kph;

        const iconDownThree = data.forecast.forecastday[0].hour[3].condition.icon;
        const tempDownThree = data.forecast.forecastday[0].hour[3].temp_c;
        const windDownThree = data.forecast.forecastday[0].hour[3].gust_kph;

        const iconDownFour = data.forecast.forecastday[0].hour[4].condition.icon;
        const tempDownFour= data.forecast.forecastday[0].hour[4].temp_c;
        const windDownFour = data.forecast.forecastday[0].hour[4].gust_kph;

        const iconDownFive = data.forecast.forecastday[0].hour[5].condition.icon;
        const tempDownFive = data.forecast.forecastday[0].hour[5].temp_c;
        const windDownFive = data.forecast.forecastday[0].hour[5].gust_kph;

        const iconDownSix = data.forecast.forecastday[0].hour[6].condition.icon;
        const tempDownSix = data.forecast.forecastday[0].hour[6].temp_c;
        const windDownSix = data.forecast.forecastday[0].hour[6].gust_kph;

        const iconDownSeven = data.forecast.forecastday[0].hour[7].condition.icon;
        const tempDownSeven = data.forecast.forecastday[0].hour[7].temp_c;
        const windDownSeven = data.forecast.forecastday[0].hour[7].gust_kph;

        const iconDownEight = data.forecast.forecastday[0].hour[8].condition.icon;
        const tempDownEight = data.forecast.forecastday[0].hour[8].temp_c;
        const windDownEight = data.forecast.forecastday[0].hour[8].gust_kph;

        const iconDownNine = data.forecast.forecastday[0].hour[9].condition.icon;
        const tempDownNine = data.forecast.forecastday[0].hour[9].temp_c;
        const windDownNine = data.forecast.forecastday[0].hour[9].gust_kph;

        const iconDownTen = data.forecast.forecastday[0].hour[10].condition.icon;
        const tempDownTen = data.forecast.forecastday[0].hour[10].temp_c;
        const windDownTen = data.forecast.forecastday[0].hour[10].gust_kph;

        const iconDownEleven = data.forecast.forecastday[0].hour[11].condition.icon;
        const tempDownEleven = data.forecast.forecastday[0].hour[11].temp_c;
        const windDownEleven = data.forecast.forecastday[0].hour[11].gust_kph;

        const iconDownTwelve = data.forecast.forecastday[0].hour[12].condition.icon;
        const tempDownTwelve = data.forecast.forecastday[0].hour[12].temp_c;
        const windDownTwelve = data.forecast.forecastday[0].hour[12].gust_kph;

        const iconDownThirteen = data.forecast.forecastday[0].hour[13].condition.icon;
        const tempDownThirteen = data.forecast.forecastday[0].hour[13].temp_c;
        const windDownThirteen = data.forecast.forecastday[0].hour[13].gust_kph;

        const iconDownFourteen = data.forecast.forecastday[0].hour[14].condition.icon;
        const tempDownFourteen = data.forecast.forecastday[0].hour[14].temp_c;
        const windDownFourteen = data.forecast.forecastday[0].hour[14].gust_kph;

        const iconDownFifteen = data.forecast.forecastday[0].hour[15].condition.icon;
        const tempDownFifteen = data.forecast.forecastday[0].hour[15].temp_c;
        const windDownFifteen = data.forecast.forecastday[0].hour[15].gust_kph;

        const iconDownSixteen = data.forecast.forecastday[0].hour[16].condition.icon;
        const tempDownSixteen = data.forecast.forecastday[0].hour[16].temp_c;
        const windDownSixteen = data.forecast.forecastday[0].hour[16].gust_kph;

        const iconDownSeventeen = data.forecast.forecastday[0].hour[17].condition.icon;
        const tempDownSeventeen = data.forecast.forecastday[0].hour[17].temp_c;
        const windDownSeventeen = data.forecast.forecastday[0].hour[17].gust_kph;

        const iconDownEighteen = data.forecast.forecastday[0].hour[18].condition.icon;
        const tempDownEighteen = data.forecast.forecastday[0].hour[18].temp_c;
        const windDownEighteen = data.forecast.forecastday[0].hour[18].gust_kph;

        const iconDownNineteen = data.forecast.forecastday[0].hour[19].condition.icon;
        const tempDownNineteen = data.forecast.forecastday[0].hour[19].temp_c;
        const windDownNineteen = data.forecast.forecastday[0].hour[19].gust_kph;

        const iconDownTwenty = data.forecast.forecastday[0].hour[20].condition.icon;
        const tempDownTwenty = data.forecast.forecastday[0].hour[20].temp_c;
        const windDownTwenty = data.forecast.forecastday[0].hour[20].gust_kph;

        const iconDownTwentyOne = data.forecast.forecastday[0].hour[21].condition.icon;
        const tempDownTwentyOne = data.forecast.forecastday[0].hour[21].temp_c;
        const windDownTwentyOne = data.forecast.forecastday[0].hour[21].gust_kph;

        const iconDownTwentyTwo = data.forecast.forecastday[0].hour[22].condition.icon;
        const tempDownTwentyTwo = data.forecast.forecastday[0].hour[22].temp_c;
        const windDownTwentyTwo = data.forecast.forecastday[0].hour[22].gust_kph;

        const iconDownTwentyThree = data.forecast.forecastday[0].hour[23].condition.icon;
        const tempDownTwentyThree = data.forecast.forecastday[0].hour[23].temp_c;
        const windDownTwentyThree = data.forecast.forecastday[0].hour[23].gust_kph;

        const time = data.location.localtime;

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

        document.querySelector(".icon-down-double-zero").src = iconDownZero;
        document.querySelector(".temp-down-double-zero").textContent = tempDownZero;
        document.querySelector(".wind-down-double-zero").textContent = windDownZero;

        document.querySelector(".icon-down-zero-one").src = iconDownOne;
        document.querySelector(".temp-down-zero-one").textContent = tempDownOne;
        document.querySelector(".wind-down-zero-one").textContent = windDownOne;

        document.querySelector(".icon-down-zero-two").src = iconDownTwo;
        document.querySelector(".temp-down-zero-two").textContent = tempDownTwo;
        document.querySelector(".wind-down-zero-two").textContent = windDownTwo;

        document.querySelector(".icon-down-zero-three").src = iconDownThree;
        document.querySelector(".temp-down-zero-three").textContent = tempDownThree;
        document.querySelector(".wind-down-zero-three").textContent = windDownThree;

        document.querySelector(".icon-down-zero-four").src = iconDownFour;
        document.querySelector(".temp-down-zero-four").textContent = tempDownFour;
        document.querySelector(".wind-down-zero-four").textContent = windDownFour;

        document.querySelector(".icon-down-zero-five").src = iconDownFive;
        document.querySelector(".temp-down-zero-five").textContent = tempDownFive;
        document.querySelector(".wind-down-zero-five").textContent = windDownFive;

        document.querySelector(".icon-down-zero-six").src = iconDownSix;
        document.querySelector(".temp-down-zero-six").textContent = tempDownSix;
        document.querySelector(".wind-down-zero-six").textContent = windDownSix;

        document.querySelector(".icon-down-zero-seven").src = iconDownSeven;
        document.querySelector(".temp-down-zero-seven").textContent = tempDownSeven;
        document.querySelector(".wind-down-zero-seven").textContent = windDownSeven;

        document.querySelector(".icon-down-zero-eight").src = iconDownEight;
        document.querySelector(".temp-down-zero-eight").textContent = tempDownEight;
        document.querySelector(".wind-down-zero-eight").textContent = windDownEight;

        document.querySelector(".icon-down-zero-nine").src = iconDownNine;
        document.querySelector(".temp-down-zero-nine").textContent = tempDownNine;
        document.querySelector(".wind-down-zero-nine").textContent = windDownNine;

        document.querySelector(".icon-down-ten").src = iconDownTen;
        document.querySelector(".temp-down-ten").textContent = tempDownTen;
        document.querySelector(".wind-down-ten").textContent = windDownTen;

        document.querySelector(".icon-down-eleven").src = iconDownEleven;
        document.querySelector(".temp-down-eleven").textContent = tempDownEleven;
        document.querySelector(".wind-down-eleven").textContent = windDownEleven;

        document.querySelector(".icon-down-twelve").src = iconDownTwelve;
        document.querySelector(".temp-down-twelve").textContent = tempDownTwelve;
        document.querySelector(".wind-down-twelve").textContent = windDownTwelve;

        document.querySelector(".icon-down-zero-one-pm").src = iconDownThirteen;
        document.querySelector(".temp-down-zero-one-pm").textContent = tempDownThirteen;
        document.querySelector(".wind-down-zero-one-pm").textContent = windDownThirteen;

        document.querySelector(".icon-down-zero-two-pm").src = iconDownFourteen;
        document.querySelector(".temp-down-zero-two-pm").textContent = tempDownFourteen;
        document.querySelector(".wind-down-zero-two-pm").textContent = windDownFourteen;

        document.querySelector(".icon-down-zero-three-pm").src = iconDownFifteen;
        document.querySelector(".temp-down-zero-three-pm").textContent = tempDownFifteen;
        document.querySelector(".wind-down-zero-three-pm").textContent = windDownFifteen;

        document.querySelector(".icon-down-zero-four-pm").src = iconDownSixteen;
        document.querySelector(".temp-down-zero-four-pm").textContent = tempDownSixteen;
        document.querySelector(".wind-down-zero-four-pm").textContent = windDownSixteen;

        document.querySelector(".icon-down-zero-five-pm").src = iconDownSeventeen;
        document.querySelector(".temp-down-zero-five-pm").textContent = tempDownSeventeen;
        document.querySelector(".wind-down-zero-five-pm").textContent = windDownSeventeen;

        document.querySelector(".icon-down-zero-six-pm").src = iconDownEighteen;
        document.querySelector(".temp-down-zero-six-pm").textContent = tempDownEighteen;
        document.querySelector(".wind-down-zero-six-pm").textContent = windDownEighteen;

        document.querySelector(".icon-down-zero-seven-pm").src = iconDownNineteen;
        document.querySelector(".temp-down-zero-seven-pm").textContent = tempDownNineteen;
        document.querySelector(".wind-down-zero-seven-pm").textContent = windDownNineteen;

        document.querySelector(".icon-down-zero-eight-pm").src = iconDownTwenty;
        document.querySelector(".temp-down-zero-eight-pm").textContent = tempDownTwenty;
        document.querySelector(".wind-down-zero-eight-pm").textContent = windDownTwenty;

        document.querySelector(".icon-down-zero-nine-pm").src = iconDownTwentyOne;
        document.querySelector(".temp-down-zero-nine-pm").textContent = tempDownTwentyOne;
        document.querySelector(".wind-down-zero-nine-pm").textContent = windDownTwentyOne;

        document.querySelector(".icon-down-ten-pm").src = iconDownTwentyTwo;
        document.querySelector(".temp-down-ten-pm").textContent = tempDownTwentyTwo;
        document.querySelector(".wind-down-ten-pm").textContent = windDownTwentyTwo;

        document.querySelector(".icon-down-eleven-pm").src = iconDownTwentyThree;
        document.querySelector(".temp-down-eleven-pm").textContent = tempDownTwentyThree;
        document.querySelector(".wind-down-eleven-pm").textContent = windDownTwentyThree;

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

setInterval(updateAllTemperatures, 100000);

