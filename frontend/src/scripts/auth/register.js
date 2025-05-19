const changeError = (message) => {
    const error = document.getElementById('error');
    error.textContent = message;
    setTimeout(() => {
        error.textContent = '';
    }, 3000);
}
 
export default async function register(event) {
     event.preventDefault();
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Registering...';
 
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const password_confirm = document.getElementById('password_confirm').value;
 
     if (password !== password_confirm) {
         changeError('Passwords do not match');
        submitButton.disabled = false;
        submitButton.textContent = 'Register';
         return;
     }
    
    if (password.length < 8) {
        changeError('Password must be at least 8 characters long');
        submitButton.disabled = false;
        submitButton.textContent = 'Register';
        return;
    }
 
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            window.location.href = '/login.html';
        } else {
            const errorData = await response.json();
            changeError(errorData.message || 'Failed to register');
        }
    } catch (error) {
        changeError('Network error. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Register';
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', register);