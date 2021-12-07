/** @format */

let count = document.getElementById("count");
let time = 120;
let stopTime = true;
let interval;

function start() {
  if (stopTime == true) {
    stopTime = false;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
}
function giveUp() {
  if (stopTime == false) {
    stopTime = true;
    document.getElementById("failure").textContent =
      "😈They all try, yet they all fail, " +
      "You only lasted " +
      (120 - time) +
      " seconds😈";
  }
}
function reset() {
  stopTime = true;
  count.textContent = "120";
  document.getElementById("failure").textContent = "";
  document.getElementById("result").textContent = "";
  time = 120;
}
function countDown() {
  if (stopTime == false) {
    time = parseInt(time);
    time--;
    if (time < 1) {
      time = 0;
      document.getElementById("result").textContent =
        "Never thought i'd actually live this long to see someone complete this challenge. congratulations!🎊🎉";
    }
    count.textContent = time;
  }
}
