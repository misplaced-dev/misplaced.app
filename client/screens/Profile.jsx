import { View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import HomeHeader from "../components/HomeHeader";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <HomeHeader />
        <ProfileContainer />
      </ScrollView>
    </View>
  );
};

export default Profile;
