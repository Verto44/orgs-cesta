import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { Texto } from "../../../components/Texto";
import { Botao } from "./Botao";

function comprarCesta() {
  console.log("Comprar cesta");
}

export function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  button,
}) {
  return (
    <>
      <Texto style={styles.nomeCesta}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imgFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={styles.description}>{descricao}</Texto>
      <Texto style={styles.priceStyle}>{preco}</Texto>

      <Botao title={button} onClik={comprarCesta}></Botao>
    </>
  );
}

const styles = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontWeight: "bold",
    marginVertical: 12,
    fontSize: 26,
  },
  fazenda: {
    flexDirection: "row",
  },
  imgFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  description: {
    color: "#A3A3A3",
    marginVertical: 12,
    fontSize: 16,
  },
  priceStyle: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
  },
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
