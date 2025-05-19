import addTodo from "./addTodo.js";
import renderTodos from "./renderTodo.js";
import { input, button } from "./document.js";

button.addEventListener("click", () => {
    addTodo(input.value);
});

input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        addTodo(input.value);
    }
});

renderTodos();
