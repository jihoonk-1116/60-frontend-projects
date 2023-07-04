const API_KEY = "98ca4ffd9e53aeded9bf62748302dca3";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    //default behavior of submission of "form" tag is a refreshing of a page
    event.preventDefault();
    const cityName = cityInputEl.value;
    getWeatherData(cityName);
});

async function getWeatherData(cityName){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
        if(!res.ok){
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">
        `;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}℃`;
        weatherDataEl.querySelector(".description").textContent = `${description}`;
        weatherDataEl.querySelector(".details").innerHTML = details
            .map((detail) => `<div>${detail}</div>`)
            .join();
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "An error happened, Please try again";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}