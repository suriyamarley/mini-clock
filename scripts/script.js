//elements

var date = new Date();


var dateEl = document.getElementById("date");
var dayEl = document.getElementById("day");
var timeEl = document.getElementById("time");
var periodEL = document.getElementById("period")
var noofday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

// functions

// date-section

function printDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  dateEl.innerHTML = `  <span>${day} -</span>
  <span>${month} -</span>
  <span>${year}</span>`;
}

printDate();

// day-section

function printDay(){
  let date = new Date();
  let today = date.getDay();
  let day = noofday[today];
 
 
  dayEl.innerHTML = day;
}

printDay();

// time-section


function printTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let period = "AM";

  hours = hours === 0 ? (hours = 12) : hours;
  period = hours > 12 ? "PM": "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  sec = sec < 10 ? `0${sec}` : sec;

  timeEl.innerHTML = `<span>${hours} :</span>
  <span>${mins} :</span>
  <span>${sec}</span>`;

  periodEL.innerHTML = `<span>${period}</span>`;
 


}




setInterval(printTime, 1000);