import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { resetPassword } from "../api/auth-api";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);

  const onSubmitPressed = async () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    setLoading(true);
    const response = await resetPassword({ email: email.value });
    if (response.error) {
      alert(response.error);
    } else {
      alert("Check your email for a reset link");
    }
    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Reset Password</Header>
      <TextInput
        label="Email"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        onChangeText={(text) => {
          setEmail({ value: text, error: "" });
        }}
        description="You will receive an email with password reset link."
      />
      <Button mode="contained" onPress={onSubmitPressed}>
        Send Instructions
      </Button>
    </Background>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({});
