import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native'
import React, {useState} from 'react'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        alert("logged in");
    };
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
                  <TouchableOpacity onPress={login}>
                      <Text>Login</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Signup;