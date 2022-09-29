const colors = () => {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  document.getElementById("text").innerText = `rgb(${red},${green},${blue})`;
};

const hex = document.getElementById("hex");

document.querySelector(".btn").addEventListener("click", () => {
  let first, second, third, fourth, fifth, sixth;
});
