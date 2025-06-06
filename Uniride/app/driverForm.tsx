import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface DriverFormState {
  partida: string;
  encontro: string;
  destino: string;
  horario: string;
  lugares: string;
  cor: string;
  placa: string;
  observacoes: string;
}
export default function Driver() {
  const router = useRouter();
  const [form, setForm] = useState<DriverFormState>({
    partida: "",
    encontro: "",
    destino: "",
    horario: "",
    lugares: "",
    cor: "",
    placa: "",
    observacoes: "",
  });

  const handleChange = (field: keyof DriverFormState, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const validateForm = (): boolean => {
    const requiredFields: { key: keyof DriverFormState; label: string }[] = [
      { key: "partida", label: "Local da partida" },
      { key: "encontro", label: "Ponto de Encontro" },
      { key: "destino", label: "Destino" },
      { key: "horario", label: "Horário da saída" },
      { key: "lugares", label: "Lugares disponíveis" },
      { key: "cor", label: "Cor do veículo" },
      { key: "placa", label: "Placa" },
    ];

    for (const field of requiredFields) {
      if (!form[field.key]?.trim()) {
        Alert.alert(
          "Campo Obrigatório",
          `Por favor, preencha o campo: ${field.label}`
        );
        return false;
      }
    }

    if (form.lugares.trim() !== "" && isNaN(Number(form.lugares))) {
      Alert.alert(
        "Entrada Inválida",
        "O campo 'Lugares disponíveis' deve ser um número."
      );
      return false;
    }
    if (form.lugares.trim() !== "" && Number(form.lugares) <= 0) {
      Alert.alert(
        "Entrada Inválida",
        "O campo 'Lugares disponíveis' deve ser maior que zero."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/listOfPassengers");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Local da partida</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Cesuca"
            placeholderTextColor="#ccc"
            value={form.partida}
            onChangeText={(text) => handleChange("partida", text)}
          />

          <Text style={styles.label}>Ponto de Encontro</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Em frente ao portão principal"
            placeholderTextColor="#ccc"
            value={form.encontro}
            onChangeText={(text) => handleChange("encontro", text)}
          />

          <Text style={styles.label}>Destino</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Centro de Cachoeirinha"
            placeholderTextColor="#ccc"
            value={form.destino}
            onChangeText={(text) => handleChange("destino", text)}
          />

          <Text style={styles.label}>Horário da saída</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 18:00"
            placeholderTextColor="#ccc"
            value={form.horario}
            onChangeText={(text) => handleChange("horario", text)}
          />

          <Text style={styles.label}>Lugares disponíveis</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 3"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={form.lugares}
            onChangeText={(text) => handleChange("lugares", text)}
          />

          <Text style={styles.label}>Cor do veículo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Prata"
            placeholderTextColor="#ccc"
            value={form.cor}
            onChangeText={(text) => handleChange("cor", text)}
          />

          <Text style={styles.label}>Placa</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: ABC1D23"
            placeholderTextColor="#ccc"
            value={form.placa}
            onChangeText={(text) => handleChange("placa", text)}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Observações</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Ex: Ar condicionado, porta malas cheio, prefiro não levar animais."
            placeholderTextColor="#ccc"
            value={form.observacoes}
            onChangeText={(text) => handleChange("observacoes", text)}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o ScrollView ocupe toda a altura se o conteúdo for menor
    backgroundColor: Colors.gray.medium,
    padding: 16,
  },
  formGroup: {
    gap: 8, // Gap ligeiramente reduzido para um formulário mais compacto
  },
  label: {
    color: Colors.default,
    marginTop: 12, // Margem superior aumentada para melhor separação
    marginBottom: 4,
    fontWeight: "bold",
    fontSize: 16, // Rótulo ligeiramente maior
  },
  input: {
    backgroundColor: Colors.gray.dark,
    color: Colors.default,
    borderRadius: 8, // Raio da borda ligeiramente menor
    paddingHorizontal: 14, // Padding aumentado
    paddingVertical: 12, // Padding aumentado
    fontSize: 16, // Tamanho de fonte consistente
    borderWidth: 1,
    borderColor: Colors.gray.light, // Borda sutil
  },
  textArea: {
    // Estilo para TextInput multiline
    height: 100, // Altura explícita para textarea
    paddingTop: 12, // Ajusta o padding para multiline
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 24, // Margem aumentada
    marginBottom: 16, // Adiciona alguma margem inferior
  },
  button: {
    backgroundColor: Colors.default, // Usando um azul de Colors (ajuste se necessário)
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 50, // Botão mais largo
    elevation: 2, // Adiciona sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: {
    color: Colors.blue.light,
    fontWeight: "bold",
    fontSize: 16,
  },
});
