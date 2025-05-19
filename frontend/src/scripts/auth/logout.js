export default async function logout() {
    try {
        const response = await fetch('/api/auth/', {
            method: 'DELETE',
        });

        if (response.ok) {
            window.location.href = '/';
        } else {
            console.error('Logout failed:', response.status);
        }
    } catch (error) {
        console.error('Logout error:', error);
     }
 }