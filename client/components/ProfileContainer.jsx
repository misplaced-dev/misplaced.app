import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ProfileContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <SafeAreaView>
    <View>
        <Text>Misplaced</Text>
    </View>
  </SafeAreaView>
  );
};

export default ProfileContainer;