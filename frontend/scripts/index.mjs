import addTodo from "./addTodo.mjs";
import renderTodos from "./renderTodo.mjs";
import { input, button } from "./document.mjs";

button.addEventListener("click", () => {
    addTodo(input.value);
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo(input.value);
    }
});

renderTodos();