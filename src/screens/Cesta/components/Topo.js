import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import imgTopo from "../../../../assets/topo.png";
import { Texto } from "../../../components/Texto";

const width = Dimensions.get("screen").width;

export function Topo({ titulo }) {
  return (
    <>
      <Image source={imgTopo} style={styles.imgTopoStyle} />
      <Texto style={styles.title}>{titulo}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  imgTopoStyle: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    paddingTop: 16,
    fontWeight: "bold",
  },
});
