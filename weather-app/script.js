const resultDiv = document.querySelector(".result");
const button = document.querySelector(".click-me");
const inputBox = document.querySelector(".input-box");
let city,
  i = 0,
  j = 0;

const fetchCountryByName = () => {
  const api = "4e7961cf4460b44aaf06bfad0d1c68e8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${api}&units=metric`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        alert(`Please enter a valid city`);
        throw new Error();
      }
      return res.json();
    })
    .then((data) => getStarted(data))
    .catch((err) => console.log(err));
};

const getStarted = (data) => {
  let image;
  const {
    name,
    main: { temp, feels_like, temp_min, temp_max },
    weather: { description, main },
    sys: { country },
    wind: { speed },
  } = data;
  console.log(data);
  console.log(data.weather[0].description);
  console.log(city);

  //? Image //////////////////////////////////////////

  if (data.weather[0].main == "Clear") {
    image = "https://i.gifer.com/XFbw.gif";
  } else if (data.weather[0].main == "Clouds") {
    image = "https://i.gifer.com/1F1B.gif";
  } else if (data.weather[0].main == "Rain") {
    image = "https://i.gifer.com/FEuz.gif";
  } else if (data.weather[0].main == "Snow") {
    image = "https://i.gifer.com/YS5a.gif";
  } else if (data.weather[0].main == "Drizzle") {
    image = "https://i.gifer.com/7sd5.gif";
  } else if (data.weather[0].main == "Thunderstorm") {
    image = "https://i.gifer.com/6kNp.gif";
  } else if (data.weather[0].main == "Mist") {
    image = "https://i.gifer.com/IJNM.gif";
  }

  if (i >= 3) {
    document.getElementById(`${j}.div`).classList.add("d-none");
    j++;
  }

  resultDiv.innerHTML =
    `
<div class="card me-4 mt-4" style="width: 18rem;" id="${i}.div">
  <img src="${image}" class="card-img-top" alt="..." width="150px" height="240px">
  <div class="card-body">
    <h2 class="card-title">${name}  <span class="fs-6" style="color:red">${country}</span></h2>
    <h1 class="card-text">${temp}°C</h1>
    <p class="card-text">${data.weather[0].main}</p>
    <p class="card-text"><span class="span-text">Feels Like:</span> ${feels_like}°C</p>
    <p class="card-text">${temp_min}°C / ${temp_max}°C</p>
  
    
  </div>
</div>
` + resultDiv.innerHTML;

  i++;
};

button.addEventListener("click", () => {
  resultDiv.classList.remove("d-none");
  document.querySelector(".warning").classList.add("d-none");
  document.querySelector(".clear-all").classList.remove("d-none");

  city = inputBox.value;
  inputBox.value = "";

  fetchCountryByName();
});

inputBox.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    resultDiv.classList.remove("d-none");
    document.querySelector(".warning").classList.add("d-none");
    document.querySelector(".clear-all").classList.remove("d-none");

    city = inputBox.value;
    inputBox.value = "";

    fetchCountryByName();
  }
});

document.querySelector(".clear-all").addEventListener("click", () => {
  window.location.reload();
});
