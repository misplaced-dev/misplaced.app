import { View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Header />
        <AboutUs />
      </ScrollView>
    </View>
  );
};

export default About;
