let first = "";
let second = "";
let sum = 0;
let sum2 = 1;

const screenNow = document.querySelector(".now");
const screenSum = document.querySelector(".sum");

document.querySelector(".container").addEventListener("click", (e) => {
  //? Operators
  function add() {}
  if (e.target.classList.contains("add")) {
    second = Number(first);
    first = "";
    sum += second;
    sum2 = sum;
    screenSum.innerText = sum;
  }
  if (e.target.classList.contains("sub")) {
    second = Number(first);
    first = "";
    sum -= second;
    sum2 = sum;
    screenSum.innerText = sum;
  }
  if (e.target.classList.contains("x")) {
    second = Number(first);
    first = "";
    sum2 *= second;
    sum = sum2;
    screenSum.innerText = sum;
  }
  if (e.target.classList.contains("division")) {
    second = Number(first);
    first = "";
    sum2 /= second;
    sum = sum2;
    screenSum.innerText = sum;
  }

  //? Numbers
  if (e.target.classList.contains("number")) {
    if (e.target.classList.contains("equal")) {
      screenNow.innerText = sum + Number(first);
      first = "";
    } else {
      first += "" + `${e.target.innerText}`;
      screenNow.innerText = first;
    }
  }

  //? AC
  if (e.target.classList.contains("ac")) {
    window.location.reload();
  }
});
