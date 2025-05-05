import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAuth} from "../../context/AuthContext";
import axios from "../../api/axiosInstance";

import { saveToken} from "../../utils/storage";

const Login = () => {
    const {login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const login = async (email, password) => {
    //     try {
    //         console.log("inside login");
    //         const res = await axios.post('/api/auth/login', { email, password });
    //         const { accessToken, refreshToken } = res.data;
    //         console.log("accessToken", accessToken);
    //         await saveToken('accessToken', accessToken);
    //         await saveToken('refreshToken', refreshToken);
    //
    //         // setAccessToken(accessToken);
    //         //  setUser({}); // Optional user info
    //     }catch (e) {
    //         console.log("axios error "+ e.message);
    //     }
    // };

    // const login = async (email, password) => {
    //     console.log("inside login");
    //
    //     const axiosInstance = axios.create({
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //
    //     axiosInstance.interceptors.request.use(
    //         async (config) => {
    //             console.log("inside request interceptor");
    //             const token = await getToken('accessToken');
    //             if (token) {
    //                 config.headers.Authorization = `Bearer ${token}`;
    //             }
    //             return config;
    //         },
    //         (error) => Promise.reject(error)
    //     );
    //
    //     const res = await axios.post('http://192.168.59.218:3000/api/auth/login', { email, password });
    //
    //     const { accessToken, refreshToken } = res.data;
    //     console.log("accessToken", accessToken);
    //     await saveToken('accessToken', accessToken);
    //     await saveToken('refreshToken', refreshToken);
    // };
  return (
    <SafeAreaView>
        <View>
            <Text>Welcome back to notes taker</Text>
        </View>
        <View>
            <View>
                <Text>Email</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View>
                <TouchableOpacity onPress={(e) => login(email, password)}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login;