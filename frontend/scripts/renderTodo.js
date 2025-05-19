import createTodo from "./createTodos.js";
import { getTodos } from "./saveTodos.js";
import { input } from "./document.js";

/**
 * Render the todos
 * @description Render the todos in the DOM
 * @returns {void}
 */
const renderTodos = () => {
    const todos = getTodos();

    const todosElement = document.querySelector("#todos");

    input.value = "";
    todosElement.innerHTML = "";

    todos.forEach(todo => {
        const todoElement = createTodo(todo);
        todosElement.appendChild(todoElement);
    });
};

export default renderTodos;
