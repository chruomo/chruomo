days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

setInterval(function () {
  updateDateTime();
}, 1000);

function updateDateTime() {
  var d = new Date();
  var day = d.getDay();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  var seconds = d.getSeconds();
  // var ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours == 0) ? 12 : hours;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  time = `${hours} ${minutes} ${seconds}`;
  
  timeDiv = document.getElementById("time");
  if (timeDiv != null) {
    timeDiv.innerHTML = time;
  };

  daySpan = document.getElementById("day");
  if (daySpan != null) {
    daySpan.innerHTML = days[day];
  };
}