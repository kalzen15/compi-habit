import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import Button from "./src/components/Button";
import { theme } from "./src/core/theme";

export default function App() {
  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button mode="contained">Click Here</Button>
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
