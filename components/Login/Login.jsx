import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext'


export default function Login() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await login({ username, password })
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            {error & <p>{error}</p>}
            <input name='username' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input name='password' type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
        </form>
    )
}