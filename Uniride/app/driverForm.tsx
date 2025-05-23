import { useRouter } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Driver() {
  const router = useRouter();
  return (
    <ScrollView>
      <Text>DRIVER FORM</Text>

      <TouchableOpacity onPress={() => router.push("/listOfPassengers")}>
        <Text>Encontrar caroneiros</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
