import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        <Stack.Screen
          name="driverForm"
          options={{ headerShown: true, title: "Formulário" }}
        />
        <Stack.Screen
          name="listOfPassengers"
          options={{ headerShown: true, title: "Lista de passageiros" }}
        />
        <Stack.Screen
          name="passengerForm"
          options={{ headerShown: true, title: "Formulário" }}
        />
        <Stack.Screen
          name="matchDriver"
          options={{ headerShown: true, title: "Mororista encontrado" }}
        />
      </Stack>
    </AuthProvider>
  );
}
