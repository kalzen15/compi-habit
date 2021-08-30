import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const BackButton = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        source={require("../assets/arrow_back.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
});
