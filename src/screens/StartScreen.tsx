import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header> Login Template</Header>
      <Paragraph>
        Welcome to the app that will cure all your habit problems!
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
      >
        Sign Up
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({});
