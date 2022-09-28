const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "tokenKey",
  "GC1W7oh9ur4LPh2qcglqTLRww80StDspeZhb9AjvuNDxCU4nmXtenvUd/aBohAFI"
);
// localStorage.setItem(
//   "tokenKeyEncrypted",
//   EncryptStringAES("4e7961cf4460b44aaf06bfad0d1c68e8")
// );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

//? Get Api Func.
const getWeatherDataFromApi = async () => {
  //alert("http request is gone!");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  //   alert(tokenKey);
  const inpputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

  const response = await fetch(url).then((response) => response.json());
  console.log(response);
};
