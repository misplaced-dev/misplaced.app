import { View, Text, ScrollView, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView keyboardDismissMode="interactive">
        <Header />
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
