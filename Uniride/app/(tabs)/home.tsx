import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.gray.medium,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo à Home</Text>
      <Pressable
        onPress={() => router.replace("/")}
        style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Sair</Text>
      </Pressable>
    </View>
  );
}
