const abc = document.getElementById("number-box");
const efg = document.getElementById("result");
abc.addEventListener("input", () => {
  efg.innerHTML = diamond(abc.value);
});

let diamond = (number) => {
  const sayi = number;
  let result = "";
  let sayi2 = sayi;

  let bosluk = -2;
  for (let i = 1; i < sayi * 2; i++) {
    if (i < sayi) {
      for (let j = sayi2; j > 0; j--) {
        result += " ";
      }
      result = result + "*";
      sayi2--;

      for (let a = bosluk; a >= 0; a--) {
        result = result + " ";
      }
      if (bosluk != -2) {
        result = result + "*" + "\n";
      } else {
        result += "\n";
      }
      bosluk += 2;
    } else {
      for (let l = sayi2; l > 0; l--) {
        result += " ";
      }
      result = result + "*";
      sayi2++;
      for (let a = bosluk; 0 <= a; a--) {
        result = result + " ";
      }

      if (bosluk == -2) {
        break;
      } else {
        bosluk -= 2;
        result = result + "*" + "\n";
      }
    }
  }

  return `${result}`;
};
