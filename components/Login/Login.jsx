import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const { token } = await res.json;
            // store token in Auth state
            setAuth({ token });
        } else {
            throw new Error("Error validating login") 
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error & <p>{error}</p>}
            <input name='username' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input name='password' type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
        </form>
    )
}