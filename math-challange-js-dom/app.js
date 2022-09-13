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

//? Functions

randomFunc = function (small, big) {
  let number = Math.random();
  number = number * (big - small); //* big-small arasinda sayi uretmek icin
  number = Math.floor(number) + small;
  return number;
};

function newQuestion() {
  let opts = ["+", "-", "*", "/"];
  operator.textContent = opts[randomFunc(0, 4)]; //* random operator icin

  if (operator.textContent === "*") {
    number1.textContent = randomFunc(0, 20);
    number2.textContent = randomFunc(0, 20);
  } else if (operator.textContent === "/") {
    //* kalansiz bolme icin
    number1.textContent = randomFunc(0, 20);
    while (true) {
      number2.textContent = randomFunc(0, 20);
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
  s1 = Number(number1.textContent);
  s2 = Number(number2.textContent);
  switch (operator.textContent) {
    case "+":
      res = s1 + s2;
      break;
    case "-":
      res = s1 - s2;
      break;
    case "*":
      res = s1 * s2;
      break;
    case "/":
      res = s1 / s2;
      break;
    default:
      break;
  }
  if (result.value == res) {
    correct.textContent = Number(correct.textContent) + 1;
  } else {
    wrong.textContent = Number(wrong.textContent) + 1;
  }

  if (correct.textContent == "10") {
    alert("YOU'RE WINNER 😍");
    window.location.reload();
  }
  if (wrong.textContent == "10") {
    alert("YOU FAILED 😥");
    window.location.reload();
  }
  newQuestion();
};
