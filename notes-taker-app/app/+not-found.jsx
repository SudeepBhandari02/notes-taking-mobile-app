import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { useRouter } from "expo-router";
import penLogo from "../assets/images/penLogo.png";

const NotFound = () =>{
  const router = useRouter();

  return (
    <SafeAreaView className="w-full h-full bg-[#15042e] flex justify-center items-center px-6">
      <View className="items-center gap-6">
        <Image source={penLogo} className="h-16 w-16" />
        <Text className="text-4xl font-semibold text-[#9b72cf] text-center">Oops! Page Not Found</Text>
        <Text className="text-lg text-gray-300 text-center px-4">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/")}
          className="bg-[#f3f945] px-6 py-4 rounded-full mt-4"
        >
          <Text className="text-[#15042e] text-lg font-semibold">Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default NotFound;
