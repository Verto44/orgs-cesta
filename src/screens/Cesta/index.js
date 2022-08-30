import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Topo } from "./components/Topo";

import { Detalhes } from "./components/Detalhes";
import { Item } from "./components/Item";

export function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Text style={styles.titulo}>{itens.titulo}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    marginHorizontal: 16,
  },
});
