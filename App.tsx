import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-native-paper";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import TextInput from "./src/components/TextInput";
import { theme } from "./src/core/theme";

const Stack = createStackNavigator();

function Screen1() {
  return (
    <View style={styles.container}>
      <Header>Hello</Header>
      <Button mode="contained">Click Here</Button>
      <TextInput label="Email" />
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.container}>
      <Header>Hello</Header>
      <Button mode="contained">Click Here</Button>
      <TextInput label="Email" />
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.container}>
      <Header>Hello</Header>
      <Button mode="contained">Click Here</Button>
      <TextInput label="Email" />
    </View>
  );
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Screen1"
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
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
