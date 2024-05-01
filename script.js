// Initial References
let timerRef = document.querySelector(".timer-display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const activeAlarms = document.querySelector(".activeAlarms");
const setAlarm = document.getElementById("set");
let  alarmsArray = [];
let alarmSound = new Audio("./Audio.mp3");

let initialHour = 0,
  initialMinute = 0,
  alarmIndex = 0;

const appendZero = (value) => (value <10 ? "0" + value : value);

const searchObject = (parameter, value) => {
    let alarmObject,
      objIndex,
      exits = false;
    alarmsArray.forEach((alarm, index) => {
        if(alarm[parameter] === value) {
            exits=true;
            alarmObject = alarm;
            objIndex = index;
            return false;
        }
    });
    return [exits, alarmObject, objIndex];
};
//Display Time
function displayTimer() {
    let date = new Date();
    let [hours, minutes, seconds] = [
        appendZero(date.getHours()),
        appendZero(date.getMinutes()),
        appendZero(date.getSeconds()),
    ];
    timerRef.innerHTML = '${hours}:${minutes}:${seconds}';

    //Alarm
    alarmsArray.forEach((alarm, index) => {
        if (alarm.isActive) {
            if ('${alarm.alarmHour}:${alarm.alarmMinute}:${seconds}') {
                alarmSound.play();
                alarmSound.loop = true;
            }
        }
    });
}


