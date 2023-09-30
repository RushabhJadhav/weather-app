import setTempImage from './modules/images.js';
import { kelvinToCelsius, kelvinToFahrenheit } from './modules/converter.js';
import isDay from './modules/bgimg.js';

console.log("day", isDay)

let searchBtn = document.getElementById("search-icon");

let searchBar = document.getElementById("search-bar");

let apiID = 'ace526a3c569b00441f622e36ca31bde';

let d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let month = months[d.getMonth()];

let day = days[d.getDay()];

// let cityName = document.querySelector('.city-name').innerHTML;

searchBtn.addEventListener('click', fetchTemperature)
searchBar.addEventListener('keypress', e => e.key === 'Enter' ? fetchTemperature() : null)

function fetchTemperature() {
    let city = document.getElementById("search-bar").value;
    if(city.length != 0) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiID}`)
        .then(response => {
            return response.json()
        }).then(data => {
            // console.log(data)
            kelvinToCelsius(data.main.temp)
            kelvinToFahrenheit(data.main.temp)
            setTempImage(data.weather[0].description)
            document.querySelector('.weather-grid').style.display = 'flex';
            document.querySelector('.weather-desc').innerHTML = data.weather[0].description;
            document.querySelector('.location-name').innerHTML = data.name;
            document.querySelector('.humidity').innerHTML = `Humidity : ${data.main.humidity}%`; 
            document.querySelector('.pressure').innerHTML = `Pressure : ${data.main.pressure}`;
            document.querySelector('.date').innerHTML = `${d.getDate()} ${month}, ${day}`;
        })
    } else {
        alert('please enter something')
    }
    document.getElementById('search-bar').value = '';
}
