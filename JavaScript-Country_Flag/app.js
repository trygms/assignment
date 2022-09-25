let randomNumber1, randomNumber2, randomNumber3, randomNumber4;
let randomNum, randomCountryNumber;
let score = 0,
  question = 0,
  counter = 0,
  bestScore = 0;

const fetchCountryByName = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`Something went wrong: ${res.status}`);
        throw new Error();
      }
      return res.json();
    })
    .then((data) => renderCountries(data))
    .catch((err) => console.log(err));
};

const renderCountries = (data) => {
  function randomNumber() {
    randomNumber1 = Math.ceil(Math.random() * 250);
    randomNumber2 = Math.ceil(Math.random() * 250);
    randomNumber3 = Math.ceil(Math.random() * 250);
    randomNumber4 = Math.ceil(Math.random() * 250);
  }
  if (
    randomNumber1 == randomNumber2 ||
    randomNumber1 == randomNumber3 ||
    randomNumber1 == randomNumber4 ||
    randomNumber2 == randomNumber3 ||
    randomNumber2 == randomNumber4 ||
    randomNumber3 == randomNumber4
  ) {
    randomNumber();
  }
  //   console.log(randomNumber1, randomNumber2, randomNumber3, randomNumber4);

  function randomCountry() {
    randomNum = Math.ceil(Math.random() * 4);

    if (randomNum == 1) {
      randomCountryNumber = randomNumber1;
    } else if (randomNum == 2) {
      randomCountryNumber = randomNumber2;
    } else if (randomNum == 3) {
      randomCountryNumber = randomNumber3;
    } else if (randomNum == 4) {
      randomCountryNumber = randomNumber4;
    }
  }

  randomNumber();
  randomCountry();

  const countryDiv = document.querySelector(".countries");

  //   console.log(randomCountryNumber, data[randomCountryNumber].name.common);

  countryDiv.innerHTML = `
    <div class="card mx-auto m-3 shadow-lg" style="width: 21rem;">
      <img src="${data[randomCountryNumber].flags.svg}" class="card-img-top" alt="..."  style="max-height:168px">
      <div class="card-body bg-dark">
        <button class="button btn1">${data[randomNumber1].name.common}</button> 
        <button class="button btn2">${data[randomNumber2].name.common}</button>
        <button class="button btn3">${data[randomNumber3].name.common}</button>
        <button class="button btn4">${data[randomNumber4].name.common}</button>
      </div>
    </div>
  `;

  document.querySelector(".card-body").addEventListener("click", (e) => {
    if (e.target.innerText == data[randomCountryNumber].name.common) {
      score++;
      question++;
      document.querySelector(".tables").innerText = `${score} / ${question}`;
      fetchCountryByName();
    } else {
      question++;
      document.querySelector(".tables").innerText = `${score} / ${question}`;
      fetchCountryByName();
    }
  });
};

//? Game Start
function gameStart() {
  document.querySelector("#day-night").addEventListener("click", () => {
    document.querySelector("#body").classList.toggle("bg-light");
    document.querySelector("#body").classList.toggle("text-dark");
    document.querySelector("#day-night").classList.toggle("btn-outline-dark");
    // document.querySelector("#day-night").classList.remove("btn-outline-light");
  });
  document.querySelector(".play-button").addEventListener("click", () => {
    document.querySelector("#day-night").classList.add("d-none");
    let currentBestScore = localStorage.getItem("bestScore") || 0;
    document.querySelector(".first").classList.add("d-none");
    document.querySelector(".game").classList.remove("d-none");
    document.querySelector(
      ".best-score-h1"
    ).innerText = `Best Score : ${currentBestScore}`;

    fetchCountryByName();
    counter = 91;
    const intervalId = setInterval(() => {
      //   console.log(--counter);
      --counter;
      document.querySelector(".timer").innerText = `${counter}`;
      if (counter < 11) {
        document.querySelector(".timer").classList.add("text-danger");
        document.querySelector(".timer").classList.add("fs-2");
      }
      if (counter < 1) {
        clearInterval(intervalId);
        document.querySelector(".game").classList.add("d-none");
        document.querySelector(".result-page").classList.remove("d-none");

        document.querySelector(".result").innerHTML = `Your Score : ${
          score * 10
        } points <br> You can do better 😊`;
        document.querySelector(".timer").classList.add("d-none");
        if (score * 10 > bestScore * 10) {
          localStorage.setItem("bestScore", score * 10);
        }
      }
    }, 1000);
  });
}

gameStart();

document.querySelector(".result-button").addEventListener("click", () => {
  window.location.reload();
});
