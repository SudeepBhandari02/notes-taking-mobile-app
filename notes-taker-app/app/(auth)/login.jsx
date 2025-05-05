import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        alert("logged in");
    };
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
                <TouchableOpacity onPress={login}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login;