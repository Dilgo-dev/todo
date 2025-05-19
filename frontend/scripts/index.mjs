import createTodo from "./createTodos.mjs";

const input = document.querySelector("input");
const button = document.querySelector("button");

const todos = [];

const addTodo = (todo) => {
    todos.push(todo);
    renderTodos();
};

const renderTodos = () => {
    const todosElement = document.querySelector("#todos");
    input.value = "";
    todosElement.innerHTML = "";
    todos.forEach((todo) => {
        const todoElement = createTodo(todo);
        todosElement.appendChild(todoElement);
    });
};

button.addEventListener("click", () => {
    addTodo(input.value);
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo(input.value);
    }
});