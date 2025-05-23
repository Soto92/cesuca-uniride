import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Driver() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text>Hello world</Text>
      </Card>

      <TouchableOpacity onPress={() => router.push("/listOfPassengers")}>
        <Text style={styles.label}>Encontrar caroneiros</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.gray.medium,
  },

  label: {
    color:Colors.default,
    padding:20
  }

  
            
            

  
});
