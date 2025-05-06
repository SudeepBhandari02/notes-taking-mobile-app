import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router"
import penLogo from "../assets/images/penLogo.png"

export default function Index() {
    const router = useRouter();
  return (
    <SafeAreaView className={"w-full h-full flex justify-evenly items-center gap-28 bg-[#15042e]"}>
      <View className={"flex flex-row justify-center items-center gap-4 "}>
          <Text className={"text-3xl font-semibold text-[#9b72cf]"}>Welcome to Notes Taker</Text>
          <Image source={penLogo} className={"h-12 w-12"} />
      </View>
      <View className={"flex w-full justify-center items-center gap-4 px-12 "}>
        <TouchableOpacity className={"h-16 w-full bg-[#f3f945] rounded-full items-center justify-center"} onPress={()=> router.push("/signup")}>
          <Text className={"text-2xl text-[#15042e]"}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity className={"h-16 w-full bg-[#fff] rounded-full items-center justify-center"} onPress={()=> router.push("/login")}>
          <Text className={"text-2xl text-[#9b72cf]"}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
