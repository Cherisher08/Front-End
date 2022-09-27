/*
//FOR INDEPENDENT CLOCK
var hours = 12;
var minutes = 59;
var seconds = 0;
var ampm = 0;

function increment() {
    seconds = parseInt(seconds) + 1;
    if (seconds == 60) {
        seconds = 0;
        minutes = parseInt(minutes) + 1;
        if (minutes == 60) {
            minutes = 0;
            hours = parseInt(hours) + 1;
            if (hours == 13) {
                hours = hours - 12;
                ampm = !ampm;
                changevar(ampm);
            }
            hours = addLeadingZeros(hours);
            document.getElementById('hours').innerHTML = hours;
        }
        minutes = addLeadingZeros(minutes);
        document.getElementById('minutes').innerHTML = minutes;
    }
    seconds = addLeadingZeros(seconds);
    document.getElementById('seconds').innerHTML = seconds;
    setTimeout(() => { increment() }, 1000);
}

function changevar(am) {
    document.getElementById('ampm').innerHTML = "AM";
    if (am) {
        document.getElementById('ampm').innerHTML = "PM";
    }
}

function addLeadingZeros(num) {
    return String(num).padStart(2, '0');
}
*/


//FOR REAL-TIME CLOCK
let hourel = document.getElementById("hours");
let minuteel = document.getElementById("minutes");
let secondel = document.getElementById("seconds");
let ampmel = document.getElementById("ampm");

function increment() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourel.innerText = h;
    minuteel.innerText = m;
    secondel.innerText = s;
    ampmel.innerText = ampm;
    setTimeout(() => {
        increment();
    }, 1000)
}

increment();