export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos"));
};