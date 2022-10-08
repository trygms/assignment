const todoInput = document.querySelector("#todo-input");
const todoButton = document.getElementById("todo-button");
const todoUl = document.querySelector("#todo-ul");
const todoDesc = document.querySelector("#todo-desc-input");
const dateShow = document.querySelector(".date");
const clockShow = document.querySelector(".clock");
const localName = localStorage.getItem("Name");

document.querySelector(".welcome").innerText = `Welcome ${localName}`;

// todos dizisini localStorage'daki veriler ile guncelle
//! eger localStroge'de todos adinda bir item bulunmaz ise bos array atamasi yap.
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    addNewTodoAtList(todo);
  });
};

renderSavedTodos();

todoButton.addEventListener("click", (event) => {
  //   console.log(event.target.className);
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo");
    todoInput.focus();
  } else {
    const todoObj = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
      description: todoDesc.value,
    };
    addNewTodoAtList(todoObj);

    //?Yeni olusturulan todo'yu diziye sakla
    todos.push(todoObj);

    localStorage.setItem("TODOS", JSON.stringify(todos));

    todoInput.value = "";
    todoDesc.value = "";
    todoInput.focus();
  }
});

function addNewTodoAtList(newTodo) {
  const { id, completed, text, description } = newTodo;

  //? li eklendi
  const li = document.createElement("li");
  todoUl.appendChild(li);

  //? id eklendi
  li.setAttribute("id", id);

  //? completed kontrolu
  newTodo.completed ? li.classList.add("completed") : "";

  //? okIconclass eklendi
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? text p olarak eklendi
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //? small deneme
  const sml = document.createElement("small");
  sml.innerText = `\n ${description}`;
  p.appendChild(sml);

  //? deleteIcon eklendi
  const dltIcon = document.createElement("i");
  dltIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(dltIcon);
}

todoUl.addEventListener("click", (e) => {
  // console.log(e.target);

  const id = e.target.parentElement.getAttribute("id");

  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();

    //? Dizinin ilgili elementini sil
    todos = todos.filter((todo) => todo.id !== Number(id));

    //? todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-check")) {
    //! event, bir okey butonundan geldi ise
    //? ilgili li elementinde checked adinda bir class'i varsa bunu sil
    //?  aksi takdirde ekle (DOM)
    e.target.parentElement.classList.toggle("completed");

    // todos dizisindeki ilgili elementin completed kismini guncelle
    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].completed = !todos[index].completed;
      }
    });
    console.log(todos);

    //?todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
});

//? Enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    todoButton.click();
  }
});

todoDesc.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    todoButton.click();
  }
});

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

//? Tarih ve Saat
function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  clockShow.innerHTML = hr + ":" + min + ":" + sec + " " + ap;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  dateShow.innerText = date;

  let time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
