import React, {createContext, useState, useEffect, useContext} from 'react';
import { saveToken, getToken, deleteToken } from '../utils/storage';
import axios from '../api/axiosInstance';
import { router } from 'expo-router';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        // Check tokens on app start
        const bootstrap = async () => {
            const storedToken = await getToken('accessToken');
            if (storedToken) {
                setAccessToken(storedToken);
            }
        };
        bootstrap();
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/auth/login', { email, password });
        const { accessToken, refreshToken } = res.data;

        await saveToken('accessToken', accessToken);
        await saveToken('refreshToken', refreshToken);
        setAccessToken(accessToken);
        if(accessToken) {
            router.push("/home");
        }
        } catch (error) {
            console.log(error.message);
        }
    };

    const signup = async (email, password) => {
        try {
            const res = await axios.post('/api/auth/signup', { email, password });
            const { accessToken, refreshToken } = res.data;
    
            await saveToken('accessToken', accessToken);
            await saveToken('refreshToken', refreshToken);
            setAccessToken(accessToken);
            if(accessToken) {
                router.push("/home");
            }
        } catch (error) {
            console.error('Signup failed:', error.response?.data || error.message);
        }
    };
    

    const logout = async () => {
        await deleteToken('accessToken');
        await deleteToken('refreshToken');
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{  signup, login, logout, accessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
