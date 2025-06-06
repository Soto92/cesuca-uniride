import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        <Stack.Screen
          name="driverForm"
          options={{
            headerShown: true,
            title: "Formulário do motorista",
            headerBackTitle: "Home",
            headerStyle: { backgroundColor: Colors.blue.light },
          }}
        />
        <Stack.Screen
          name="listOfPassengers"
          options={{
            headerShown: true,
            headerBackTitle: "Home",
            title: "Passageiros Encontrados",
            headerStyle: { backgroundColor: Colors.blue.light },
          }}
        />
        <Stack.Screen
          name="passengerForm"
          options={{
            headerShown: true,
            headerBackTitle: "Home",
            title: "Formulário do passageiro",
            headerStyle: { backgroundColor: Colors.blue.light },
          }}
        />
        <Stack.Screen
          name="matchDriver"
          options={{
            headerShown: true,
            headerBackTitle: "Home",
            title: "Mororista encontrado",
            headerStyle: { backgroundColor: Colors.blue.light },
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
