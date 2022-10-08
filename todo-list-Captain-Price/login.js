const userName = document.getElementById("UserNameArea");
const password = document.getElementById("PasswordArea");
const nameInput = document.getElementById("validationNameArea");
const userNameInput = document.getElementById("validationUserNameArea");
const passwordInput = document.getElementById("validationPasswordArea");

document.querySelector(".header").addEventListener("click", (event) => {
  if (event.target.textContent == "Login") {
    document.querySelector(".login").classList.remove("d-none");
    document.querySelector(".signup").classList.add("d-none");
  } else {
    document.querySelector(".login").classList.add("d-none");
    document.querySelector(".signup").classList.remove("d-none");
  }
});

document.querySelector(".btn-login").addEventListener("click", () => {
  const localUserName = DecryptStringAES(localStorage.getItem("UserName"));
  const localPassword = DecryptStringAES(localStorage.getItem("Password"));
  const localName = localStorage.getItem("Name");
  if (
    userName.value == localUserName &&
    password.value == localPassword &&
    userName.value != "" &&
    password.value != ""
  ) {
    document.querySelector(".formLogin").classList.add("d-none");
    // document.querySelector(".welcome").innerText = `Welcome ${localName}`;
    document.querySelector(".sig").classList.add("d-none");
    document.querySelector(".log").classList.add("d-none");
    document.querySelector(".welcome").innerText = `Welcome ${localName}`;
    document.querySelector(".welcome").style.color = "white";
    setTimeout(function () {
      window.location.href = `./todo-page/index.html`;
    }, 5000);
  } else {
    document.querySelector(".welcome").innerText = `Wrong Username or Password`;
    document.querySelector(".welcome").style.color = "red";
  }
});

document.querySelector(".btn-sign-up").addEventListener("click", () => {
  const checkInput = document.querySelector(".form-check-input").checked;
  if (
    nameInput.value == "" ||
    userNameInput.value == "" ||
    passwordInput.value == "" ||
    checkInput == false
  ) {
    alert("Please fill in the required fields");
  } else {
    localStorage.setItem("UserName", EncryptStringAES(userNameInput.value));
    localStorage.setItem("Password", EncryptStringAES(passwordInput.value));
    localStorage.setItem("Name", nameInput.value);
    document.querySelector(".login").classList.remove("d-none");
    document.querySelector(".signup").classList.add("d-none");
  }
});
