import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAuth } from "./context/AuthContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    if (username === "user1" && password === "Welcome1!") {
      setIsAuthenticated(true);
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Redefinir senha",
      "Um e-mail foi enviado para redefinir sua senha."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniRide</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <View style={styles.linksContainer}>
        <Pressable onPress={() => {}}>
          <Text style={styles.linkText}>Faça seu cadastro</Text>
        </Pressable>

        <Pressable onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.gray.medium,
  },
  title: {
    fontSize: 30,
    marginBottom: 90,
    color: Colors.default,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  linksContainer: {
    alignItems: "center",
  },
  linkText: {
    color: Colors.blue.light,
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline" as "underline",
  },
});
