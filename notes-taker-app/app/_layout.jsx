import { Stack } from 'expo-router';
import {AuthProvider} from "../context/AuthContext";
import "../global.css"
import {StatusBar} from "expo-status-bar";
import {NotesProvider} from "../context/NotesContext";

export default function Layout() {
  return (
      <AuthProvider>
          <NotesProvider>
            <StatusBar style="light" backgroundColor="#15042e" translucent={false} />
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" options={{headerShown: false}} />
            </Stack>
          </NotesProvider>
      </AuthProvider>
  );
}
