import setTempImage from './modules/images.js';
import { kelvinToCelsius, kelvinToFahrenheit } from './modules/converter.js';

let searchBtn = document.getElementById("search-icon");

let apiID = 'ace526a3c569b00441f622e36ca31bde';

// let cityName = document.querySelector('.city-name').innerHTML;

searchBtn.addEventListener('click', fetchTemperature)

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
            document.querySelector('.weather-desc').innerHTML = data.weather[0].description;
            document.querySelector('.weather-card').style.display = 'block';
            // document.querySelector('.city-name').innerHTML = data.name;
            document.querySelector('.humidity').innerHTML = `Humidity : ${data.main.humidity}%`;
            document.querySelector('.pressure').innerHTML = `Pressure : ${data.main.pressure}`;
        })
    } else {
        alert('please enter something')
    }
    document.getElementById('search-bar').value = '';
}
