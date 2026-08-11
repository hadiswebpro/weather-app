
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const cityNameElement = document.querySelector(".city-name");
const temperatureElement = document.querySelector(".temperature");
const info = document.getElementById("info");




// WEATHER CLASSES

const weatherClasses = [
    "weather-default",
    "weather-sunny",
    "weather-cloudy",
    "weather-rainy",
    "weather-foggy",
    "weather-snowy",
    "weather-thunderstorm"
];


async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        return;
    }


    const url =`/weather?city=${encodeURIComponent(city)}`;

    info.innerHTML = `
    <li class="loading-message">
        <span>⏳ Getting weather...</span>
    </li>`;

    searchButton.disabled = true;
    searchButton.textContent = "Searching...";

    try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
 
            changeErrorTheme();

            info.innerHTML = `
                <li class="error-message">
                    😕 ${data.message}
                </li>
            `;

            return;

        }

        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
        const weatherCondition = data.weather[0].main;

        cityNameElement.textContent = cityName;
        temperatureElement.textContent = `${Math.round(temperature)}°C`;

        changeWeatherTheme(weatherCondition);

        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        changeDayNight(sunrise, sunset);

        const weatherEmoji = getWeatherEmoji(weatherCondition);

        info.innerHTML = `

            <li>
                <span>💧 Humidity</span>
                <strong>${humidity}%</strong>
            </li>

            <li>
                <span>💨 Wind</span>
                <strong>${Math.round(windSpeed * 3.6)} km/h</strong>
            </li>

            <li>
                <span>🌡️ Feels like</span>
                <strong>${Math.round(feelsLike)}°C</strong>
            </li>

            <li>
                <span>${weatherEmoji} Condition</span>
                <strong>${description}</strong>
            </li>

        `;


    } catch (error) {

        console.error("Error:", error);
        info.innerHTML = `
            <li class="error-message">
                ⚠️ Something went wrong. Please try again.
            </li>
        `;

    }finally {

          searchButton.disabled = false;
          searchButton.textContent = "Search 🔍";
        }

}



function changeWeatherTheme(condition) {


    document.body.classList.remove(...weatherClasses);

    if (condition === "Clear") {

        document.body.classList.add("weather-sunny");

    }

    else if (condition === "Clouds") {

        document.body.classList.add("weather-cloudy");

    }

    else if (condition === "Rain") {

        document.body.classList.add("weather-rainy");

    }

    else if (condition === "Snow") {

        document.body.classList.add("weather-snowy");

    }

    else if (
        condition === "Fog" ||
        condition === "Mist" ||
        condition === "Haze"
    ) {

        document.body.classList.add("weather-foggy");

    }

    else if (condition === "Thunderstorm") {

        document.body.classList.add("weather-thunderstorm");

    }

    else {

        document.body.classList.add("weather-default");

    }

}




function changeDayNight(sunrise, sunset) {

    const now = Math.floor(Date.now() / 1000);
    document.body.classList.remove("day", "night");


    if (now >= sunrise && now < sunset) {

        document.body.classList.add("day");

    }

    else {

        document.body.classList.add("night");

    }

}


searchButton.addEventListener("click", searchWeather);



cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchWeather();

    }

});

function changeErrorTheme() {

    document.body.classList.remove(
        ...weatherClasses,
        "day",
        "night"
    );

    document.body.classList.add("weather-error");
}

function getWeatherEmoji(condition) {

    const isNight = document.body.classList.contains("night");


    if (condition === "Clear") {

        if (isNight) {
            return "🌙";
        }

        return "☀️";
    }


    switch (condition) {

        case "Clouds":
            return "☁️";

        case "Rain":
            return "🌧️";

        case "Drizzle":
            return "🌦️";

        case "Thunderstorm":
            return "⛈️";

        case "Snow":
            return "❄️";

        case "Mist":
        case "Fog":
        case "Haze":
            return "🌫️";

        default:
            return "🌤️";
    }
}