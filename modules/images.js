let date = new Date().getHours();

let isDay = date >= 6 && date <= 18 ? true : false ;

const setTempImage = (description) => {
    console.log('day', isDay)
    let imageDesc = document.getElementById('temp-img');
    console.log(description)
    switch(description) {
        case 'clear sky':
            imageDesc.src = './images/day/clear.png';
            break;
        case 'few clouds':
            imageDesc.src = './images/day/mostlysunny.png';
            break;
        case 'scattered clouds':
        case 'broken clouds':
        case 'light intensity drizzle':
            imageDesc.src = './images/day/cloudy.png';
            break;
        case 'overcast clouds':
        case 'drizzle rain':
        case 'heavy intensity drizzle rain':
        case 'shower drizzle':
        case 'light rain':
        case 'drizzle':
        case 'light intensity shower rain':
        case 'light intensity drizzle rain':
            imageDesc.src = './images/day/chancerain.png';
            break;
        case 'rain':
        case 'moderate rain':
        case 'shower rain and drizzle':
        case 'heavy shower rain and drizzle':
        case 'heavy intensity rain':
        case 'very heavy rain':
        case 'extreme rain':
        case 'freezing rain':
        case 'shower rain':
        case 'heavy intensity shower rain':
        case 'ragged shower rain':
            imageDesc.src = './images/day/rain.png';
            break;
        case 'thunderstorm':
        case 'thunderstorm with light rain':
        case 'thunderstorm with rain':
        case 'thunderstorm with heavy rain':
        case 'light thunderstorm':
        case 'heavy thunderstorm':
        case 'ragged thunderstorm':
        case 'thunderstorm with light drizzle':
        case 'thunderstorm with drizzle':
        case 'thunderstorm with heavy drizzle':
            imageDesc.src = './images/day/storm.png';
            break;
        case 'snow':
        case 'heavy snow':
        case 'shower snow':
        case 'heavy shower snow':
            imageDesc.src = './images/day/flurries.png';
            break;
        case 'sleet':
        case 'light snow':
        case 'light shower sleet':
        case 'shower sleet':
        case 'light rain and snow':
        case 'rain and snow':
        case 'light shower snow':
            imageDesc.src = './images/day/sleet.png';
            break;
        case 'mist':
        case 'smoke':
        case 'haze':
        case 'sand/dust whirls':
        case 'sand':
        case 'dust':
        case 'volcanic ash':
        case 'squalls':
        case 'tornado':
            imageDesc.src = './images/day/fog.png';
            break;
        default:
            imageDesc.src = './images/day/clear.png';
    }

}

export default setTempImage;