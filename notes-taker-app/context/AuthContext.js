import React, {createContext, useState, useEffect, useContext} from 'react';
import { saveToken, getToken, deleteToken } from '../utils/storage';
import axios from '../api/axiosInstance';
import { router } from 'expo-router';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
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
            if(error.status===404){
                alert("User doesn't exist, Please register");
            }
            else if(error.status===401){
                alert("Invalid credentials");
            }
            else{
                alert("Server Problem ! Please Try Again ");
            }
        }
    };

    const signup = async (email, password) => {
        try {
            const res = await axios.post('/api/auth/signup', { email, password });
            console.log(res);
            
            if (res.status === 409) {
                alert("User already exists. Please login.");
                return
            }
            const { accessToken, refreshToken } = res.data;
            await saveToken('accessToken', accessToken);
            await saveToken('refreshToken', refreshToken);
            setAccessToken(accessToken);
            if(accessToken) {
                router.push("/home");
            }
        } catch (error) { 
            if (error.status === 409) {
                alert("User already exists. Please login.");
                return
            }
            alert('Signup failed. Please try again.');
            console.error('Signup failed:', error.response?.data || error.message);
            
        }
    };
    

    const logout = async () => {
        await deleteToken('accessToken');
        await deleteToken('refreshToken');
        setAccessToken(null);
        router.replace('/');
    };

    return (
        <AuthContext.Provider value={{  signup, login, logout, accessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
