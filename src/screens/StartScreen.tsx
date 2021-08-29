import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

export default function StartScreen() {
  return (
    <Background>
      <Header> Login Template</Header>
      <Paragraph>
        Welcome to the app that will cure all your habit problems!
      </Paragraph>
      <Button mode="outlined">Login</Button>
      <Button mode="contained">Sign Up</Button>
    </Background>
  );
}

const styles = StyleSheet.create({});
