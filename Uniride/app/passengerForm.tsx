import { useRouter } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Passenger() {
  const router = useRouter();
  return (
    <ScrollView>
      <Text>Passenger FORM</Text>

      <TouchableOpacity onPress={() => router.push("/matchDriver")}>
        <Text>Encontrar motora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
