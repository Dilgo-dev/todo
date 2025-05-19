/**
 * Save the todos
 * @description Save the todos to the localStorage
 * @param {Array} todos - The todos
 * @returns {void}
 */
export const saveTodos = todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

/**
 * Get the todos
 * @description Get the todos from the localStorage
 * @returns {Array} - The todos
 */
export const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
