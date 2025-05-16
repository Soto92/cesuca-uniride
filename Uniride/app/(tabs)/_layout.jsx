import { Tabs, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

export default function TabsLayout() {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.replace("/");
  };

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="red"
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="red"
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            />
          ),
        }}
      />
    </Tabs>
  );
}
