/**
 * Create a todo
 * @description Create a todo element
 * @param {string} text - The text of the todo
 * @returns {HTMLElement} - The todo element
 */
const createTodo = (text) => {
    const todo = document.createElement("div");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    todo.textContent = text;
    todo.appendChild(checkbox);

    return todo;
};

export default createTodo;