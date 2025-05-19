async function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please enter an email and password');
        return;
    }

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (response.ok) {
        window.location.href = '/';
    } else {
        alert('Invalid credentials');
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', login);