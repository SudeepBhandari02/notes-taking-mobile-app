import { Stack } from 'expo-router';
import {AuthProvider} from "../context/AuthContext";
import "../global.css"
import {StatusBar} from "expo-status-bar";

export default function Layout() {
  return (
      <AuthProvider>
          <StatusBar style="light" backgroundColor="#15042e" translucent={false} />
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>
      </AuthProvider>
  );
}
