import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, SetUser] = useState(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/login')
            SetUser(response.data.user);
        } catch (error) {
            console.log(error)
            throw Error('Error in login.')
        }
    }

    const logout = () => {
        SetUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}