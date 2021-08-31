import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Background from "../components/Background";
import firebase from "firebase/app";

const SplashScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navigation.reset({ routes: [{ name: "HomeScreen" }] });
    } else {
      navigation.reset({ routes: [{ name: "StartScreen" }] });
    }
  });
  return (
    <Background>
      <ActivityIndicator size="large" />
    </Background>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
