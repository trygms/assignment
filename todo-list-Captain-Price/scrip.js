const todoInput = document.querySelector("#todo-input");
const todoButton = document.getElementById("todo-button");
const todoUl = document.querySelector("#todo-ul");
const todoDesc = document.querySelector("#todo-desc-input");

document.querySelector(".todo-main").addEventListener("click", (event) => {
  //   console.log(event.target.className);
  if (event.target.className == "todo-add") {
    const todoObj = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
      description: todoDesc.value,
    };
    addNewTodoAtList(todoObj);
    todoInput.value = "";
  }
});

const addNewTodoAtList = (newTodo) => {
  const { id, completed, text } = newTodo;

  //? li eklendi
  const li = document.createElement("li");
  todoUl.appendChild(li);

  //? id eklendi
  li.setAttribute("id", id);

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
  sml.innerText = "\n price";
  p.appendChild(sml);

  //? deleteIcon eklendi
  const dltIcon = document.createElement("i");
  dltIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(dltIcon);
};
