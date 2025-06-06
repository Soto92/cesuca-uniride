import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Driver {
  id: string;
  name: string;
  rating: number;
  carModel: string;
}

const initialDrivers: Driver[] = [
  { id: "1", name: "Camila Andrade", rating: 4.9, carModel: "Onix Preto 2020" },
  { id: "2", name: "Lucas Silva", rating: 4.6, carModel: "HB20 Branco 2019" },
  { id: "3", name: "Fernanda Lima", rating: 4.7, carModel: "Fiesta Azul 2018" },
];

export default function MatchDriver() {
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers);

  const handleContactViaWhatsApp = async (driverName: string) => {
    const phoneNumber = "5551999997777";
    const message = `Olá ${driverName}, estou interessado na carona pelo UniRide!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "WhatsApp não disponível.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao abrir o WhatsApp.");
    }
  };

  const handleRequestRide = (driver: Driver) => {
    Alert.alert(
      "Solicitação Enviada",
      `Você solicitou uma carona com ${driver.name}.`,
      [{ text: "OK" }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {drivers.map((driver) => (
        <Card style={styles.card} key={driver.id}>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.name}>{driver.name}</Text>
              <Text style={styles.carModel}>{driver.carModel}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{driver.rating.toFixed(1)}</Text>
              <MaterialIcons name="star" size={20} color={Colors.yellow} />
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.button, styles.whatsappButton]}
              onPress={() => handleContactViaWhatsApp(driver.name)}
            >
              <FontAwesome name="whatsapp" size={24} color={Colors.white} />
              <Text style={styles.buttonText}>Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.requestButton]}
              onPress={() => handleRequestRide(driver)}
            >
              <MaterialIcons
                name="directions-car"
                size={24}
                color={Colors.white}
              />
              <Text style={styles.buttonText}>Solicitar</Text>
            </TouchableOpacity>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray.medium,
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.default,
  },
  carModel: {
    fontSize: 16,
    color: Colors.default,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray.light,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 16,
    color: Colors.default,
    fontWeight: "bold",
    marginRight: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 120,
    justifyContent: "center",
  },
  whatsappButton: {
    backgroundColor: Colors.green.default,
  },
  requestButton: {
    backgroundColor: Colors.blue.light,
  },
  buttonText: {
    color: Colors.white,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});
