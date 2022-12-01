var currentTime = document.querySelector(".wrapper h1");
var selectMenu = document.querySelectorAll("select");
var setAlarmBtn = document.querySelector("button");
var content = document.querySelector(".content");
let alarmTime, isAlarmSet = false, rington = new Audio("twirling-intime-rington.mp3");


for (let i = 12; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value=${i}>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value=${i}>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value=${ampm}>${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);

}


setInterval(() => {



    // getting hour, mins, secs
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    // adding 0 before hour,mins,second,if  this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.textContent = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}`) {

        rington.play();
        rington.loop = true;
        console.log("ringinng rington");
    }
}, 1000);

setAlarmBtn.addEventListener("click", setAlarm);

function setAlarm() {

    if (isAlarmSet) {
        alarmTime = "";// is alarmSet is true
        rington.pause();//pause the ringtone
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false; //return isAlarmSet value to false
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("please, select a valid time to set Alarm");
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");

    setAlarmBtn.innerText = "Clear Alarm";


    console.log(time);
}