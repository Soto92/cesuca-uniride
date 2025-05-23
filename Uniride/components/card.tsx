import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

export function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.gray.light,
    borderRadius: 12,
    padding: 16
  },
});
