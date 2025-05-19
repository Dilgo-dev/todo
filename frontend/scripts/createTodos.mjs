const createTodo = (text) => {
    const todo = document.createElement("div");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    todo.textContent = text;
    todo.appendChild(checkbox);

    return todo;
};

export default createTodo;