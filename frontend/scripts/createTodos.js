import { getTodos, saveTodos } from "./saveTodos.js";

/**
 * Create a todo
 * @description Create a todo element
 * @param {Object} todo - The todo
 * @param {number} todo.id - The id of the todo
 * @param {string} todo.text - The text of the todo
 * @param {boolean} todo.completed - The completed status of the todo
 * @returns {HTMLElement} - The todo element
 */
const createTodo = ({ id, text, completed }) => {
    const todo = document.createElement("div");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = completed;
    todo.textContent = text;
    todo.appendChild(checkbox);

    checkbox.addEventListener("change", () => {
        const todos = getTodos();
        const todoIndex = todos.findIndex(todo => todo.id === id);
        todos[todoIndex].completed = checkbox.checked;
        saveTodos(todos);
    });

    return todo;
};

export default createTodo;
