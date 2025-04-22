import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#2E8B57",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
