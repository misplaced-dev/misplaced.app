import { View, ScrollView, StatusBar, Platform } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../components/HomeHeader.jsx";
import ProfileButton from "../components/ProfileButton.jsx";
import PostCards from "../components/PostCards.jsx";
import Filters from "../components/Filters.jsx";
import Sort from "../components/Sort.jsx";
import PostButton from "../components/PostButton.jsx";
import Footer from "../components/Footer.jsx";

const isMobile = Platform.OS === "ios" || Platform.OS === "android";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <HomeHeader />
        <ProfileButton />
        <Sort />
        <Filters />
        <PostCards />
        <Footer />
      </ScrollView>
      {isMobile ? null : <PostButton style={{ position: "absolute" }} />}
      {isMobile ? <PostButton /> : null}
    </View>
  );
};

export default Home;
