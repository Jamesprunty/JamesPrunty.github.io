
//get the second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
var setTimeEnable = false;
var alarmEnabled = false;



var current = "UK";

UKBtn = document.getElementById("UK");
CABtn = document.getElementById("CA");
AUBtn = document.getElementById("AU");
ITBtn = document.getElementById("IT");
setBtn = document.getElementById("SetTimeBtn");
alarmBtn = document.querySelector("input[name=enableAlarm]");

UKBtn.addEventListener("click", event => current = "UK");
CABtn.addEventListener("click", event => current = "CA");
AUBtn.addEventListener("click", event => current = "AU");
ITBtn.addEventListener("click", event => current = "IT");
setBtn.addEventListener("click", event => current = "custom");
alarmBtn.addEventListener('change', function(){


    if(this.checked){

        alarmEnabled = true;

    }else{

        alarmEnabled = false;

    }

});



setInterval(alarm, 1000);




function alarm() {


    var min = document.getElementById('alarmMinutes').value;
    var hour = document.getElementById('alarmHours').value;
    var clock = document.querySelector('clock-face');
    const setDate = new Date();


    const minNow = setDate.getMinutes();
    const hourNow = setDate.getHours();

    console.log("alarm has started");

    if (alarmEnabled) {
        if (hour == hourNow && min == minNow) {

            console.log("alarm");
            clock.classList.add('alarm');
            

        } else {

            console.log("Not the right time");
        }
    }

}



function setDate(TZ) {

    if (TZ == "UK") {
        //Gets the current date and sets to "now"
        const now = new Date();
        // Make a const for seconds and set to "getSeconds()"
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(seconds);

    } else if (TZ == "CA") {

        //Gets the current date and sets to "now"
        const now = new Date();
        // Make a const for seconds and set to "getSeconds()"
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() + 8;
        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(seconds);


    } else if (TZ == "AU") {

        //Gets the current date and sets to "now"
        const now = new Date();
        // Make a const for seconds and set to "getSeconds()"
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() + 11;
        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(seconds);
    } else if (TZ == "IT") {

        //Gets the current date and sets to "now"
        const now = new Date();
        // Make a const for seconds and set to "getSeconds()"
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() + 1;
        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(seconds);
    } else if (TZ == "custom") {

        var sec = document.getElementById('seconds').value;
        var min = document.getElementById('minutes').value;
        var hour = document.getElementById('hours').value;
        console.log("true");

        const seconds = sec;
        const minutes = min;
        const hours = hour;
        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;







    }

}

if (setTimeEnable) {
    var sec = document.getElementById('seconds').value;
    var min = document.getElementById('minutes').value;
    var hour = document.getElementById('hours').value;
    console.log("true");
    setInterval(function () { setCurrent(sec, min, hour) }, 1000);

} else {

    // This will run "setDate" every second.
    setInterval(function () { setDate(current) }, 1000);

}







