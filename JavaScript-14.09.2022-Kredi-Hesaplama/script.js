//? Variables
let krediTuru, secilenBanka;
let sayi = 1;
let ustYazi = document.getElementById("ustYazi");
const devamButonu = document.querySelector("#devam");
const ihtiyac = document.getElementById("ihtiyac");
const ev = document.getElementById("ev");
const arac = document.getElementById("arac");
const kobi = document.getElementById("kobi");

devamButonu.addEventListener("click", () => {
  ustYazi.innerText = `Lütfen Kredi Türünü Seçiniz`;
  document.querySelector(".kredi-turu").classList.remove("d-none");

  ihtiyac.addEventListener("click", () => {
    krediTuru = "ihtiyac";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    bankaSec();
  });

  ev.addEventListener("click", () => {
    krediTuru = "ev";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    bankaSec();
  });

  arac.addEventListener("click", () => {
    krediTuru = "arac";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    bankaSec();
  });
  kobi.addEventListener("click", () => {
    krediTuru = "kobi";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    bankaSec();
  });
});

const bankaSec = function () {
  ustYazi.innerText = `Lütfen Banka Seçiniz`;
  let a = document.querySelectorAll(".bankalar button");
  console.log(a);
};
