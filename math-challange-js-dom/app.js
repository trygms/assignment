//? Variables

let number1,
  number2,
  correct = 0,
  wrong = 0,
  result,
  buttonOk,
  operator;

//? HTML Variables

number1 = document.getElementById("number1");
number2 = document.querySelector("#number2");
operator = document.getElementById("operator");
result = document.querySelector("#result");
buttonOk = document.getElementById("btnOkey");
correct = document.querySelector("#correct");
wrong = document.getElementById("wrong");
let audio = document.getElementById("audio");

//? Functions

randomFunc = function (small, big) {
  let number = Math.random();
  number = number * (big - small); //* big-small arasinda sayi uretmek icin
  number = Math.floor(number) + small;
  return number;
};

function newQuestion() {
  setInterval(downloadTimer);
  let opts = ["+", "-", "*", "/"];
  operator.textContent = opts[randomFunc(0, 4)]; //* random operator icin

  if (operator.textContent === "*") {
    number1.textContent = randomFunc(0, 30);
    number2.textContent = randomFunc(0, 20);
  } else if (operator.textContent === "/") {
    //* kalansiz bolme icin
    number1.textContent = randomFunc(1, 200);
    while (true) {
      number2.textContent = randomFunc(1, 200);
      if (number1.textContent % number2.textContent == 0) {
        break;
      }
    }
  } else {
    number1.textContent = randomFunc(0, 200);
    number2.textContent = randomFunc(0, 200);
  }
}

window.onload = function () {
  newQuestion();
};

//? Result and Button

result.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    buttonOk.onclick();
  }
});

buttonOk.onclick = function () {
  let res, n1, n2;
  n1 = Number(number1.textContent);
  n2 = Number(number2.textContent);
  switch (operator.textContent) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n1 / n2;
      break;
    default:
      break;
  }
  if (result.value == res) {
    correct.textContent = Number(correct.textContent) + 1;
    result.value = "";
    document.getElementById("countdown").innerHTML = "Correct ✅";
  } else {
    wrong.textContent = Number(wrong.textContent) + 1;
    result.value = "";
    document.getElementById("countdown").innerHTML = "Wrong ❌";
  }

  if (correct.textContent == "10") {
    // alert("YOU'RE WINNER 😍");
    // window.location.reload();
    document.querySelector(".change-class1").classList.add("d-none");
    document.querySelector(".change-class2").classList.add("d-none");
    document.getElementById("try-again").classList.remove("d-none");
    document.getElementById("lastmessage").innerText = "YOU'RE WINNER 😍";
    document.getElementById("try-again").addEventListener("click", () => {
      window.location.reload();
    });
  }
  if (wrong.textContent == "10") {
    // alert("YOU FAILED 😥");
    // window.location.reload();
    document.querySelector(".change-class1").classList.add("d-none");
    document.querySelector(".change-class2").classList.add("d-none");
    document.getElementById("try-again").classList.remove("d-none");
    document.getElementById("lastmessage").innerText = "YOU FAILED 😥";
    document.getElementById("try-again").addEventListener("click", () => {
      window.location.reload();
    });
  }
  timeleft = 10;
  newQuestion();
};

let timeleft = 10;
let downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    document.getElementById("countdown").innerHTML = "Time is Up";
    timeleft = 10;
    buttonOk.onclick();
    newQuestion();
  } else {
    document.getElementById("countdown").textContent = timeleft + "";
  }
  timeleft -= 1;
}, 1000);
