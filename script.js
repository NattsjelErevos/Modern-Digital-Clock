"use strict";

setInterval(currentDate, 1000);

function currentDate() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let today = weekDay[date.getDay()];
  let months = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();
  let session = "AM";

  if (hours < 12) {
    hours -= 12;
    session = "PM";
  }

  if (hours === 0) {
    hours = 12;
    session = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById(
    "clock"
  ).innerHTML = `${time} ${today} ${months} ${year}`;
}

currentDate();
