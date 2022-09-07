let not;
let notToplam = 0;
let sayac = 0;
let devam = true;
let average = 0;
do {
  not = prompt("Lutfen 0-100 bir not giriniz. Cikmak icin q ya basınız.");
  if (not === "Q" || not === "q") {
    average = notToplam / sayac;
    devam = false;
    break;
  } else if (not >= 0 && not <= 100) {
    notToplam = notToplam + Number(not);
    sayac++;
    console.log(notToplam);
  } else {
    console.log("Gecerli bir not giriniz");
  }
} while (devam);

console.log(`Sınıfın Ortalamasi: ${average}`);
