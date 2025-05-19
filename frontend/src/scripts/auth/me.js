export default async function me() {
    const response = await fetch('/api/auth/me');
    const data = await response.json();
    return data;
}
