import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import {useAuth} from "../../context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signup} = useAuth();
  return (
      <SafeAreaView>
          <View>
              <Text>Welcome to notes taker</Text>
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
                  <TouchableOpacity onPress={(e)=>signup(email,password)}>
                      <Text>Register</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Signup;