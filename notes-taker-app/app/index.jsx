import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router"
export default function Index() {
    const router = useRouter();
  return (
    <SafeAreaView>
      <Text>Welcome to Notes Taker</Text>
      <View>
        <TouchableOpacity onPress={()=> router.push("/signup")}>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push("/login")}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
