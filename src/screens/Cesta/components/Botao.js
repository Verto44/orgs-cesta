import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Botao({ title, onClik }) {
  return (
    <>
      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={onClik}
      >
        <Text style={styles.textoBotao}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
