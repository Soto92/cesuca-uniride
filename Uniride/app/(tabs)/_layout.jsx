import { Tabs, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { Colors } from "@/constants/Colors";

export default function TabsLayout() {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.replace("/");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue.light,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.gray.medium,
          //  borderTopWidth: 0,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen
        name="settings"
        options={{
          headerStyle: { backgroundColor: Colors.blue.light },
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color={Colors.blue.dark}
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            />
          ),
        }}
      />
    </Tabs>
  );
}
