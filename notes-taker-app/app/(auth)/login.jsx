import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAuth} from "../../context/AuthContext";
import axios from "../../api/axiosInstance";

import { saveToken} from "../../utils/storage";

const Login = () => {
    const {login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



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