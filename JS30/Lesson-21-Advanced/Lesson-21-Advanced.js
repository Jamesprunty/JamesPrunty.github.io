const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

//watchposition and getcurrent position - watch gets it over time, get will only get it once

//This data contains:
//Degrees off north
//Latitude & Longitude
//speed (in KPH)

navigator.geolocation.watchPosition((data) =>{

    //This will put the current speed into the "speed" section, rounded to the nearest KM
    speed.textContent = Math.round(data.coords.speed);

    //Get the rotation degrees and rotate the compass
    arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`

}, (err)=>{
    console.err(err);
    alert('Enable the gps to work');
});
