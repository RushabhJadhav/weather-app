let date = new Date().getHours();

let isDay = date >= 6 && date <= 18 ? true : false ;
// let isDay = false;

if(isDay) {
    document.body.style.backgroundImage = "url('../images/dawid-zawila--G3rw6Y02D0-unsplash.jpg')";
} else {
    document.body.style.backgroundImage = "url('../images/nathan-anderson-L95xDkSSuWw-unsplash.jpg";
    document.querySelector('.app-header').style.color = "#fff"; 
}

export default isDay;