import { getTodos, saveTodos } from "./saveTodos.mjs";
import renderTodos from "./renderTodo.mjs";

/**
 * Add a todo
 * @description Add a todo to the todos array
 * @param {string} todo - The todo to add
 * @returns {void}
 */
const addTodo = (todo) => {
    const todos = getTodos();
    todos.push({ text: todo, completed: false });
    saveTodos(todos);
    renderTodos();
};

export default addTodo;
