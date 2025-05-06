import { Tabs } from 'expo-router';

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
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="saved" options={{ title: 'Saved' }} />
    </Tabs>
  );
}
