import { ScrollView, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView keyboardDismissMode="interactive">
        <Header />
        <SignupForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
