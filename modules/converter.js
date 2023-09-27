let tempCelsius = document.getElementById("celsius");

let tempFahrenheit = document.getElementById("fahrenheit");

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

export { kelvinToCelsius, kelvinToFahrenheit };