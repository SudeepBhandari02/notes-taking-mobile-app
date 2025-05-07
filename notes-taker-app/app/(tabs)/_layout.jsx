import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={
        {
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#391f5f',
            },
            tabBarActiveTintColor: '#f3f945'
        }}
    >
      <Tabs.Screen
          name="home"
          options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" size={size} color={color} />
              ),
          }}
      />
      <Tabs.Screen
          name="saved"
          options={{
              title: 'Saved' ,
              tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="save" size={size} color={color} />
              ),
      }}
      />
    </Tabs>
  );
}
