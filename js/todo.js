const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.className = "todo";
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  const button = document.createElement("span");
  button.type = "button";
  button.id = "btStyle";
  button.innerText = "✓";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
