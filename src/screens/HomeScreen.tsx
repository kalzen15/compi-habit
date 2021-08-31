import React from "react";
import { StyleSheet } from "react-native";
import { logOutUser } from "../api/auth-api";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <Background>
      <Header> Home</Header>
      <Button onPress={logOutUser} mode="contained">
        Logout
      </Button>
    </Background>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
