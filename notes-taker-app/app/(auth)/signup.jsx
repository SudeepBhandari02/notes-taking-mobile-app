import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import {useAuth} from "../../context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signup} = useAuth();
  return (
      <SafeAreaView className={"w-full h-full flex justify-center items-center gap-28 bg-[#15042e]"}>
          <View className={"flex justify-center items-center"}>
              <Text className={"text-3xl font-semibold text-[#9b72cf]"}>Welcome to Notes Taker App</Text>
          </View>
          <View className={"w-full flex items-center justify-center gap-4"}>
              <Text className={"text-4xl text-[#fff] font-semibold"}>Register</Text>
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
                  <TouchableOpacity className={"h-16 w-full bg-[#f3f945] rounded-full items-center justify-center"} onPress={(e) => signup(email, password)}>
                      <Text className={"text-2xl text-[#15042e]"}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Signup;