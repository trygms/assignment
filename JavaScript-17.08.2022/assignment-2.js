// let tahmin;
// let devam = true;
// let devam2;

// while (devam) {
//   const rastgele = Math.round(Math.random() * 100);
//   console.log(rastgele);
//   let hak = 5;
//   do {
//     tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
//     hak -= 1;
//     if (tahmin === rastgele) {
//       console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
//       break;
//     } else if (tahmin < rastgele) {
//       console.log("ARTTIR ⬆️");
//     } else {
//       console.log("AZALT ⬇️");
//     }
//   } while (hak > 0);

//   if (tahmin !== rastgele) {
//     console.log("Uzgunuz oyunu kaybettiniz 😔😔");
//   }
//   devam2 = prompt(
//     "Oyuna devam etmek istiyorsaniz E/e tusuna, etmek istemiyorsaniz herhangi bir tusa basin"
//   );
//   if (devam2 !== "E" && devam2 !== "e") {
//     devam = false;
//     alert("Gule Gule 🙋‍♀️");
//   }
// }



let devam;
let flag = true;
let tahmin;
while (flag) {

    let hak = 5;
    const rastgele = Math.round(Math.random() * 100);
    console.log(rastgele);

    do {
        tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
        hak -= 1;
        if (tahmin === rastgele) {
            console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
            break;
        } else if (tahmin < rastgele) {
            console.log("ARTTIR ");
        } else {
            console.log("AZALT ");
        }
    } while (hak > 0);

    if (tahmin !== rastgele) {
        console.log("Uzgunuz oyunu kaybettiniz ");
    }
    devam = prompt('Devam etmek istiyorsan e bas')

    if (devam === 'e' || devam === 'E') {
        flag = true;

    } else{
       flag = false;
       console.log('Game Over!');
    }


}