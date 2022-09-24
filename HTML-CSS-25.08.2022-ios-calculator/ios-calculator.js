let number = "";
let array = [];
let i = 0;
let sum = 0;
let sum2 = 1;
let lastOpr = "";

const screenNow = document.querySelector(".now");
const screenSum = document.querySelector(".sum");

document.querySelector(".container").addEventListener("click", (e) => {
  //? Operatörler
  if (e.target.classList.contains("add")) {
    if (!isNaN(array[i])) {
      number = "";
      sum += array[i];
      i++;
      sum2 = sum;
      screenSum.innerText = sum;
      lastOpr = "add";
    }
  }
  if (e.target.classList.contains("sub")) {
    array[i] = 0 - array[i];
    number = "";
    if (i == 0) {
      sum = array[i];
      i++;
    } else {
      sum -= array[i];
      i++;
    }
    sum2 = sum;
    screenSum.innerText = sum;
    lastOpr = "sub";
  }

  if (e.target.classList.contains("x")) {
    number = "";
    sum2 *= array[i];
    i++;
    sum = sum2;
    screenSum.innerText = sum;
    lastOpr = "x";
  }

  if (e.target.classList.contains("division")) {
    number = "";
    if (i == 0) {
      sum2 = array[i];
      i++;
    } else {
      sum2 /= array[i];
      i++;
    }
    sum = sum2;
    screenSum.innerText = sum.toFixed(5);
    lastOpr = "division";
  }

  //? Sayı Bölümü
  if (e.target.classList.contains("number")) {
    if (e.target.classList.contains("equal")) {
      if (lastOpr == "add") {
        sum += array[i];
        screenNow.innerText = sum;
      } else if (lastOpr == "sub") {
        sum -= array[i];
        screenNow.innerText = sum;
      } else if (lastOpr == "x") {
        sum *= array[i];
        screenNow.innerText = sum;
      } else if (lastOpr == "division") {
        sum /= array[i];
        screenNow.innerText = sum.toFixed(5);
      }
    } else {
      number += "" + `${e.target.innerText}`;
      screenNow.innerText = number;
      array[i] = Number(number);
      console.log(array);
    }
  }

  if (e.target.classList.contains("ac")) {
    number = "";
    sum = 0;
    sum2 = 1;
    screenSum.innerText = "";
    screenNow.innerText = 0;
    i = 0;
  }

  if (e.target.classList.contains("percent")) {
    screenNow.innerText = sum / 100;
  }

  if (e.target.classList.contains("pn")) {
    screenNow.innerText = Number(screenNow.innerText) * -1;
    array[i] = Number(screenNow.innerText);
  }
});
