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
    <SafeAreaView className={"w-full h-full flex justify-center items-center gap-28 bg-[#15042e]"}>
        <View className={"flex justify-center items-center"}>
            <Text className={"text-3xl font-semibold text-[#9b72cf]"}>Welcome back to notes taker</Text>
        </View>
        <View className={"w-full flex items-center justify-center gap-4"}>
            <Text className={"text-4xl text-[#fff] font-semibold"}>Login</Text>
            <View className={"w-full px-14 flex justify-center items-start gap-4"}>
                <Text className={"text-white"}>Email</Text>
                <TextInput
                    className={"w-full border border-gray-300 rounded-md text-white"}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View className={"w-full px-14 flex justify-center items-start gap-4"}>
                <Text className={"text-white"}>Password</Text>
                <TextInput
                    className={"w-full border border-gray-300 rounded-md text-white"}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View className={"w-full px-14 flex justify-center items-center mt-6"}>
                <TouchableOpacity className={"h-16 w-full bg-[#f3f945] rounded-full items-center justify-center"} onPress={(e) => login(email, password)}>
                    <Text className={"text-2xl text-[#15042e]"}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login;