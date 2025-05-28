import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
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

export default function Driver() {
  const router = useRouter();
  const [form, setForm] = useState({
    partida: "",
    encontro: "",
    destino: "",
    horario: "",
    lugares: "",
    cor: "",
    placa: "",
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

          <Text style={styles.label}>Ponto de Encontro</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.encontro}
            onChangeText={(text) => handleChange("encontro", text)}
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

          <Text style={styles.label}>Lugares disponíveis</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={form.lugares}
            onChangeText={(text) => handleChange("lugares", text)}
          />

          <Text style={styles.label}>Cor do veículo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.cor}
            onChangeText={(text) => handleChange("cor", text)}
          />

          <Text style={styles.label}>Placa</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite"
            placeholderTextColor="#ccc"
            value={form.placa}
            onChangeText={(text) => handleChange("placa", text)}
          />

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
            onPress={() => router.push("/listOfPassengers")}
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
