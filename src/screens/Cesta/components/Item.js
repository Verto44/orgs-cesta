import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { Texto } from "../../../components/Texto";

export function Item({ item: { nome, imagem } }) {
  return (
    <View style={style.item}>
      <Image source={imagem} style={style.imagem} />
      <Texto style={style.nome}>{nome}</Texto>
    </View>
  );
}

//

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomColor: "#ECECEC",
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 16,
    color: "#464646",
  },
});
