import { Colors } from "@/constants/Colors";
import React from "react";

import { StyleSheet, View } from "react-native";

export function Card({ children, style = {} }: { children: React.ReactNode }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.gray.light,
    borderRadius: 12,
    padding: 16,
  },
});
