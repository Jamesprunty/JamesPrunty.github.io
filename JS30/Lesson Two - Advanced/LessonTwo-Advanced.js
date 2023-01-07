
//get the second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
var setTimeEnable = false;
var alarmEnabled = false;
var firstSet = false;
var sec = "0";
var min = "0";
var hour = "0";
var secDiff = "0";
var minDiff = "0";
var hourDiff = "0";

//Sets the showSec to whatever the time is set to for the alarm
var showSec = "0";
var showMin = "0";
var showHour = "0"; 




var current = "UK";

UKBtn = document.getElementById("UK");
CABtn = document.getElementById("CA");
AUBtn = document.getElementById("AU");
ITBtn = document.getElementById("IT");
setBtn = document.querySelector("input[name=SetTimeBtn]");
alarmBtn = document.querySelector("input[name=enableAlarm]");
const alarmSound = document.getElementById("alarmSound");


UKBtn.addEventListener("click", event => current = "UK");
CABtn.addEventListener("click", event => current = "CA");
AUBtn.addEventListener("click", event => current = "AU");
ITBtn.addEventListener("click", event => current = "IT");
setBtn.addEventListener('change', function () {

    

    if (this.checked) {


        setTimeEnable = true;
        console.log("Set True");
        current = "custom";


    } else {

        setTimeEnable = false;
        console.log("Set False");
        current = "UK";
        firstSet = false;
        sec = "0";
        min = "0";
        hour = "0";
        secDiff = "0";
        minDiff = "0";
        hourDiff = "0";


    }



});


alarmBtn.addEventListener('change', function () {


    if (this.checked) {

        alarmEnabled = true;

    } else {

        alarmEnabled = false;
        alarmSound.pause();
        alarmSound.currentTime = 0;
        

    }

});


//Checks alarm every second
setInterval(alarm, 1000);




function alarm() {


    var min = document.getElementById('alarmMinutes').value;
    var hour = document.getElementById('alarmHours').value;
    var clock = document.querySelector('clock-face');
    const setDate = new Date();

    console.log(showHour);
    console.log(hour);
    console.log(showMin);
    console.log(min);


    const minNow = setDate.getMinutes();
    const hourNow = setDate.getHours();



    if (alarmEnabled) {
        if (hour == showHour && min == showMin) {

            console.log("alarm");
            alarmSound.play();
            


        } else {

            console.log("Not the right time");
            alarmSound.pause();
            alarmSound.currentTime = 0;
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
        setBtn.checked = false;

        showSec = seconds;
        showMin = minutes;
        showHour = hours;



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
        setBtn.checked = false;

        showSec = seconds;
        showMin = minutes;
        showHour = hours - 24;



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
        setBtn.checked = false;

        showSec = seconds;
        showMin = minutes;
        showHour = hours - 24;


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
        setBtn.checked = false;

        showSec = seconds;
        showMin = minutes;
        showHour = hours - 12;


    } else if (TZ == "custom" && setTimeEnable == true) {

        const now = new Date();
        const secondsNow = now.getSeconds();
        const minutesNow = now.getMinutes();
        const hoursNow = now.getHours() + 1;

        if (!firstSet) {

            sec = document.getElementById('seconds').value;
            min = document.getElementById('minutes').value;
            hour = document.getElementById('hours').value;
            secDiff = secondsNow - sec;
            minDiff = minutesNow - min;
            hourDiff = hoursNow - hour;

            firstSet = true;
        }



        // Get the percentage by deviding by 60, then times by 360 to get the degrees
        //We add 90 degress to offset the default 90 we put in.
        const secondsDegrees = (((secondsNow - secDiff) / 60) * 360) + 90;
        const minutesDegrees = (((minutesNow - minDiff) / 60) * 360) + 90;
        const hoursDegrees = (((hoursNow - hourDiff) / 12) * 360) + 90;
        //Set the secondhand rotate to the seconds degrees
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        showSec = secondsNow - secDiff;
        showMin = minutesNow - minDiff;
        showHour = hoursNow - hourDiff;

    } else if (setTimeEnable == false) {

        firstSet = false;
        sec = "0";
        min = "0";
        hour = "0";
        secDiff = "0";
        minDiff = "0";
        hourDiff = "0";

    }

}

if (setTimeEnable) {
    var sec = document.getElementById('seconds').value;
    var min = document.getElementById('minutes').value;
    var hour = document.getElementById('hours').value;

    setInterval(function () { setCurrent(sec, min, hour) }, 1000);

} else {

    // This will run "setDate" every second.
    setInterval(function () { setDate(current) }, 1000);

}







