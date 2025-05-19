import createTodo from "./createTodos.mjs";
import { getTodos } from "./saveTodos.mjs";
import { input } from "./document.mjs";

const renderTodos = () => {
    const todos = getTodos() || [];

    const todosElement = document.querySelector("#todos");

    input.value = "";
    todosElement.innerHTML = "";

    todos.forEach((todo) => {
        const todoElement = createTodo(todo);
        todosElement.appendChild(todoElement);
    });
};

export default renderTodos;