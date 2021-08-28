import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-native-paper";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import TextInput from "./src/components/TextInput";
import { theme } from "./src/core/theme";

export default function App() {
  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Header>Hello</Header>
        <Button mode="contained">Click Here</Button>
        <TextInput label="Email" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
