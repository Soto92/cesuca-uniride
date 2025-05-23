import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

import Driver from "../../assets/images/driver.jpg";
import Passenger from "../../assets/images/passenger.jpg";
import { Colors } from "@/constants/Colors";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.gray.medium,
      }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Hoje eu vou:</Text>
        <TouchableOpacity
          onPress={() => router.push("/driverForm")}
          style={styles.card}
        >
          <Image style={styles.img} source={Driver} />
          <Text style={styles.btnLabel}>Oferecer Carona</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/passengerForm")}
          style={styles.card}
        >
          <Image style={styles.img} source={Passenger} />
          <Text style={styles.btnLabel}>Pegar Carona</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width - 130,
    height: 150,
    borderRadius: 16,
  },
  content: {
    marginTop: 40,
  },
  btnLabel: {
    position: "absolute",
    fontSize: 32,
    color: Colors.default,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    fontSize: 32,
    color: Colors.default,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 32,
  },
});
