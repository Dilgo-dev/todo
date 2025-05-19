import createTodo from "./createTodos.mjs";
import { getTodos, saveTodos } from "./saveTodos.mjs";

const input = document.querySelector("input");
const button = document.querySelector("button");

const todos = getTodos() || [];

const addTodo = (todo) => {
    todos.push(todo);
    saveTodos(todos);
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

renderTodos();