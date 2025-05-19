import { getTodos, saveTodos } from "./saveTodos.mjs";
import renderTodos from "./renderTodo.mjs";

const addTodo = (todo) => {
    const todos = getTodos() || [];
    todos.push(todo);
    saveTodos(todos);
    renderTodos();
};

export default addTodo;
