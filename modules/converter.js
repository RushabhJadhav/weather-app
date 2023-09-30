let tempCelsius = document.getElementById("celsius");

let tempFahrenheit = document.getElementById("fahrenheit");

let setSpeed = document.querySelector('.wind');

let setVisibility = document.querySelector('.visibility');

const kelvinToCelsius = (temp) => {
    let celsius;
    celsius = Math.round(temp - 273.15);

    tempCelsius.innerHTML = `${celsius} °C`;

    console.log('celsius', celsius)  
}

const kelvinToFahrenheit = (temp) => {
    let fahrenheit;
    fahrenheit = Math.round((temp - 273.15) * (9 / 5) + 32);

    tempFahrenheit.innerHTML = `| ${fahrenheit} °F`;

    console.log('Fahrenheit', fahrenheit)
}

const milesToKilo = (val) => {
    let kiloM;
    kiloM = Math.round(val * 3600 / 1000);

    setSpeed.innerHTML = `Wind : ${kiloM} km/h`;
}

const visibilityCon = (val) => {
    let visibility;
    visibility = val / 1000;

    setVisibility.innerHTML = `Visibility : ${visibility} km`;
} 

export { kelvinToCelsius, kelvinToFahrenheit, milesToKilo, visibilityCon };