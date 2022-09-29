const colors = () => {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  document.getElementById("text").innerText = `rgb(${red},${green},${blue})`;
};

const hex = document.getElementById("hex");

const clock = document.getElementById("clock");

const showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  let time;

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    session = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  time = `${hours}:${minutes}:${seconds} ${session}`;

  clock.innerText = time;

  setTimeout(showTime, 1000);
};

showTime();
