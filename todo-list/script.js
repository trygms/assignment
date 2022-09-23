//? Selectors

const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);

    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));

    console.log(todos);
    todoInput.value = "";
  }
});

const createListElement = (newTodo) => {
  const { id, completed, text } = newTodo;

  const li = document.createElement("li");
  //   li.id = newTodo.id;
  li.setAttribute("id", id);

  //   newTodo.completed ? li.classList.add("completed") : "";
  completed && li.classList.add("checked");

  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  const p = document.createElement("p");
  const pNodeText = document.createTextNode(text);
  p.appendChild(pNodeText);
  li.appendChild(p);

  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //   console.log(li);
  todoUl.appendChild(li);
};

todoUl.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

window.onload = function () {
  todoInput.focus();
};

const renderSavedTodos = () => {
  todos.forEach((element) => {
    createListElement(element);
  });
};
renderSavedTodos();
