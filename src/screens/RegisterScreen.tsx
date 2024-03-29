import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { signUpUser } from "../api/auth-api";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import Button from "../components/Button";
import GoogleLogin from "../components/GoogleLogin";
import Header from "../components/Header";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { nameValidator } from "../helpers/nameValidator";
import { passwordValidator } from "../helpers/passwordValidator";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);

  const onSignUpPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(name.value);
    if (emailError || passwordError || nameError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setName({ ...name, error: nameError });
      return;
    }
    setLoading(true);
    const response = await signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    if (response.error) {
      alert(response.error);
    } else {
      alert(response.user.displayName);
    }
    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account </Header>
      <TextInput
        label="Email"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        onChangeText={(text) => {
          setEmail({ value: text, error: "" });
        }}
      />
      <TextInput
        label="Password"
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        onChangeText={(text) => {
          setPassword({ value: text, error: "" });
        }}
        secureTextEntry
      />
      <TextInput
        label="Name"
        value={name.value}
        error={!!name.error}
        errorText={name.error}
        onChangeText={(text) => {
          setName({ value: text, error: "" });
        }}
      />
      <Button loading={loading} mode="contained" onPress={onSignUpPressed}>
        Sign Up
      </Button>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
