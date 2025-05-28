import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Passenger() {
  const router = useRouter();
  const [form, setForm] = useState({
    partida: "",
    destino: "",
    horario: "",
    genero: "Feminino",
    observacoes: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Local da partida</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.partida}
            onChangeText={(text) => handleChange("partida", text)}
          />

          <Text style={styles.label}>Destino</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.destino}
            onChangeText={(text) => handleChange("destino", text)}
          />

          <Text style={styles.label}>Horário da saída</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.horario}
            onChangeText={(text) => handleChange("horario", text)}
          />

          <Text style={styles.label}>Gênero</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.genero}
              onValueChange={(itemValue) => handleChange("genero", itemValue)}
              style={styles.picker}
              dropdownIconColor={Colors.gray.dark}
            >
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </View>

          <Text style={styles.label}>Observações</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.observacoes}
            onChangeText={(text) => handleChange("observacoes", text)}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/matchDriver")}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray.medium,
    padding: 16,
  },
  formGroup: {
    gap: 10,
  },
  label: {
    color: Colors.default,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: Colors.gray.dark,
    color: Colors.default,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  pickerWrapper: {
    backgroundColor: Colors.gray.dark,
    borderRadius: 10,

    marginBottom: 10,
    justifyContent: "center",
  },
  picker: {
    color: Colors.gray.dark,
    height: 44,
    width: "100%",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.default,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: Colors.blue.light,
    fontWeight: "bold",
    fontSize: 16,
  },
});
