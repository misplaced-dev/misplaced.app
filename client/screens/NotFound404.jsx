import { Image, ScrollView, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const NotFound404 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Header />
        <Image
          source={require("../assets/NotFound.gif")}
          style={{ height: "80%", width: "80%", resizeMode: "contain" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotFound404;
