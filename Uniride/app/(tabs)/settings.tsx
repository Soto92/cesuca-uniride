import { Colors } from "@/constants/Colors";
import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.gray.medium,
      }}
    >
      <Text style={{ fontSize: 24 }}>Configurações</Text>
    </View>
  );
}
