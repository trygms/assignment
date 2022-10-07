const todoInput = document.querySelector("#todo-input");
const todoButton = document.getElementById("todo-button");
const todoUl = document.querySelector("#todo-ul");

document.querySelector(".todo-main").addEventListener("click", (event) => {
  //   console.log(event.target.className);
  if (event.target.className == "todo-add") {
    const todoObj = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    addNewTodoAtList(todoObj);
    todoInput.value = "";
  }
});

const addNewTodoAtList = (newTodo) => {
  const { id, completed, text } = newTodo;

  //? icerik eklendi
  const li = document.createElement("li");
  li.innerText = text;
  todoUl.appendChild(li);

  //? id eklendi
  li.setAttribute("id", id);

  //? complete class eklendi
  li.setAttribute("class", "fas fa-check");
};
