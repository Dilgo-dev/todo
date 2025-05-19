import addTodo from './addTodo.js';
import renderTodos from './renderTodo.js';
import { input, button } from './document.js';
import me from './auth/me.js';
import logout from './auth/logout.js';

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
    const logoutButton = document.createElement('button');
    logoutButton.innerHTML = 'Déconnexion';
    logoutButton.addEventListener('click', async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    });
    userdata.appendChild(logoutButton);
    auth.remove();
} else {
    userdata.remove();
}
