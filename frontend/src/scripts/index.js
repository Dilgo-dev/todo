import addTodo from './addTodo.js';
import renderTodos from './renderTodo.js';
import { input, button } from './document.js';
import me from './auth/me.js';

button.addEventListener('click', () => {
    addTodo(input.value);
});

input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addTodo(input.value);
    }
});

renderTodos();

const user = await me();

if (user.email) {
    email.innerHTML = user.email;
    auth.remove();
} else {
    userdata.remove();
}
