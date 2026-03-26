

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0e004d"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar"
        }}
      />

    </Tabs>
  );
}
