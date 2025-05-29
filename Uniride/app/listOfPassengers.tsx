import { Card } from "@/components/card";
import { Colors } from "@/constants/Colors";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

interface Passenger {
  id: string;
  name: string;
  rating: number;
}

const initialPassengers: Passenger[] = [
  { id: "1", name: "Mauricio Soto", rating: 4.8 },
  { id: "2", name: "Rodrigo Pereira", rating: 3.5 },
  { id: "3", name: "Thiago Amaral", rating: 3.9 },
  { id: "4", name: "Victor Hugo", rating: 2.2 },
  { id: "5", name: "Aline Riscado", rating: 5.0 },
];

export default function ListOfPassengers() {
  const router = useRouter();
  const [passengers, setPassengers] = useState<Passenger[]>(initialPassengers);

  const handleContactViaWhatsApp = async (passengerName: string) => {
    const phoneNumber = "5551999998888";
    const message = `Olá ${passengerName}, vi seu interesse na carona pelo UniRide!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível abrir o WhatsApp. Verifique se ele está instalado."
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar abrir o WhatsApp.");
    }
  };

  const handleAcceptPassenger = (passenger: Passenger) => {
    Alert.alert("Passageiro Aceito", `Você aceitou levar ${passenger.name}.`, [
      { text: "OK" },
    ]);
  };

  const handleDenyPassenger = (passengerId: string) => {
    Alert.alert(
      "Confirmar Remoção",
      "Tem certeza que deseja remover este passageiro da lista?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            setPassengers((prevPassengers) =>
              prevPassengers.filter((p) => p.id !== passengerId)
            );
          },
        },
      ]
    );
  };

  if (passengers.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Nenhum passageiro encontrado no momento.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {passengers.map((passenger) => (
        <Card style={styles.passengerCard} key={passenger.id}>
          <View style={styles.passengerInfo}>
            <Text style={styles.passengerName}>{passenger.name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.passengerRating}>
                {passenger.rating.toFixed(1)}
              </Text>
              <MaterialIcons name="star" size={20} color={Colors.yellow} />
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={[styles.actionButton, styles.contactButton]}
              onPress={() => handleContactViaWhatsApp(passenger.name)}
            >
              <FontAwesome name="whatsapp" size={28} color={Colors.white} />
              <Text style={styles.actionButtonText}>Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.acceptButton]}
              onPress={() => handleAcceptPassenger(passenger)}
            >
              <MaterialIcons
                name="check-circle"
                size={28}
                color={Colors.default}
              />
              <Text style={styles.actionButtonText}>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.denyButton]}
              onPress={() => handleDenyPassenger(passenger.id)}
            >
              <MaterialIcons name="cancel" size={28} color={Colors.default} />
              <Text style={styles.actionButtonText}>Recusar</Text>
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
  passengerCard: {
    marginBottom: 8,
  },
  contactButton: {
    backgroundColor: Colors.green.default, // Defina Colors.whatsappGreen
  },
  passengerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  passengerName: {
    fontSize: 20,
    fontWeight: "bold",
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
  passengerRating: {
    fontSize: 16,
    color: Colors.default,
    marginRight: 4,
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
    justifyContent: "center",
  },
  acceptButton: {
    backgroundColor: Colors.blue.light,
  },
  denyButton: {
    backgroundColor: Colors.red.default,
  },
  actionButtonText: {
    color: Colors.white,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.gray.medium,
  },
  emptyText: {
    fontSize: 18,
    color: Colors.default,
    textAlign: "center",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: Colors.blue.light,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  backButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
