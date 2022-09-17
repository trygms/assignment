//? Variables
let krediTuru, secilenBanka;
let sayi = 1;
let ustYazi = document.getElementById("ustYazi");
const devamButonu = document.querySelector("#devam");
const ihtiyac = document.getElementById("ihtiyac");
const ev = document.getElementById("ev");
const arac = document.getElementById("arac");
const kobi = document.getElementById("kobi");
const akbank = document.getElementById("akbank");
const denizbank = document.getElementById("denizbank");
const enpara = document.getElementById("enpara");
const garanti = document.getElementById("garanti");
const halkbank = document.getElementById("halkbank");
const ing = document.getElementById("ing");

devamButonu.addEventListener("click", () => {
  ustYazi.innerText = `Lütfen Kredi Türünü Seçiniz`;
  document.querySelector(".kredi-turu").classList.remove("d-none");
  document.querySelector("#devam").classList.add("d-none");

  ihtiyac.addEventListener("click", () => {
    krediTuru = "Ihtiyac";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    if (krediTuru == "Ihtiyac") {
      ihtiyac.style.color = "red";
    }
    bankaSec();
  });

  ev.addEventListener("click", () => {
    krediTuru = "Ev";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    if (krediTuru == "Ev") {
      ev.style.color = "red";
    }
    bankaSec();
  });

  arac.addEventListener("click", () => {
    krediTuru = "Arac";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    if (krediTuru == "Arac") {
      arac.style.color = "red";
    }
    bankaSec();
  });
  kobi.addEventListener("click", () => {
    krediTuru = "Kobi";
    console.log(krediTuru);
    ihtiyac.disabled = true;
    arac.disabled = true;
    kobi.disabled = true;
    ev.disabled = true;
    if (krediTuru == "Kobi") {
      kobi.style.color = "red";
    }
    bankaSec();
  });
});

const bankaSec = function () {
  ustYazi.innerText = `Lütfen Banka Seçiniz`;
  document.querySelector(".bankalar").classList.remove("d-none");
  akbank.addEventListener("click", () => {
    secilenBanka = "Akbank";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "Akbank") {
      akbank.style.border = "1px solid red";
    }
    hesapla();
  });
  denizbank.addEventListener("click", () => {
    secilenBanka = "Denizbank";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "Denizbank") {
      denizbank.style.border = "1px solid red";
    }
    hesapla();
  });
  enpara.addEventListener("click", () => {
    secilenBanka = "Enpara";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "Enpara") {
      enpara.style.border = "1px solid red";
    }
    hesapla();
  });
  garanti.addEventListener("click", () => {
    secilenBanka = "Garanti BBVA";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "Garanti BBVA") {
      garanti.style.border = "1px solid red";
    }
    hesapla();
  });
  halkbank.addEventListener("click", () => {
    secilenBanka = "Halkbank";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "Halkbank") {
      halkbank.style.border = "1px solid red";
    }
    hesapla();
  });
  ing.addEventListener("click", () => {
    secilenBanka = "ING Bank";
    akbank.disabled = true;
    denizbank.disabled = true;
    enpara.disabled = true;
    garanti.disabled = true;
    halkbank.disabled = true;
    ing.disabled = true;
    console.log(secilenBanka);
    if (secilenBanka == "ING Bank") {
      ing.style.border = "1px solid red";
    }
    hesapla();
  });
};

const hesapla = () => {
  document.querySelector(".vade1").classList.remove("d-none");
  document.querySelector(".tutar1").classList.remove("d-none");
  document.querySelector("#hesapla").classList.remove("d-none");
  ustYazi.innerText = `Lütfen İlgili Yerleri Doldurunuz`;
  document.querySelector("#hesapla").addEventListener("click", () => {
    const vade = Number(document.querySelector("#vade").value);
    if (isNaN(vade) || vade == "") {
      alert("Geçersiz bir değer girdiniz. Lütfen Tekrar Başlayın");
      window.location.reload();
    }

    const tutar = Number(document.querySelector("#tutar").value);

    if (isNaN(tutar) || tutar == "") {
      alert("Geçersiz bir değer girdiniz. Lütfen Tekrar Başlayın");
      window.location.reload();
    }

    //? Variables
    let faiz, taksitTutarı, toplamTutar;
    if (krediTuru == "Ihtiyac") {
      faiz = 1.91;
    }
    if (krediTuru == "Ev") {
      faiz = 1.71;
    }
    if (krediTuru == "Arac") {
      faiz = 2.05;
    }
    if (krediTuru == "Kobi") {
      faiz = 2.94;
    }

    //? Formul
    faiz = faiz / 100;
    taksitTutarı =
      tutar * ((faiz * (1 + faiz) ** vade) / ((1 + faiz) ** vade - 1));

    // let aylıkFaizGetirisi = (tutar / 100) * (faiz / 12) * vade;

    console.log(taksitTutarı);
    taksitTutarı = taksitTutarı.toFixed(2);
    let sonuc = (taksitTutarı * vade).toFixed(2);
    console.log(sonuc);

    document.querySelector(".tables").classList.remove("d-none");
    document.querySelector(".h1", ".mt-3").classList.remove("d-none");
    document.querySelector(".bankalar").classList.add("d-none");
    document.querySelector(".kredi-turu").classList.add("d-none");
    document.querySelector("#yeniden-hesapla").classList.remove("d-none");

    document.querySelector("#devam").classList.add("d-none");
    document.querySelector(".vade1").classList.add("d-none");
    document.querySelector(".tutar1").classList.add("d-none");
    document.querySelector("#hesapla").classList.add("d-none");

    document.querySelector("#kredi-miktar-tablo").innerText = `${tutar} ₺`;
    document.querySelector("#kredi-tipi-tablo").innerText = `${krediTuru}`;
    document.querySelector("#vade-tablo").innerText = `${vade} Ay`;
    document.querySelector("#faiz-tablo").innerText = `% ${faiz * 100}`;
    document.querySelector("#toplam-tablo").innerText = `${sonuc} ₺`;
    document.querySelector("#taksit-tablo").innerText = `${taksitTutarı} ₺`;
    document.querySelector("#banka-adı-tablo").innerText = `${secilenBanka}`;

    ustYazi.innerText = "";

    document
      .querySelector("#yeniden-hesapla")
      .addEventListener("click", () => window.location.reload());
  });
};
