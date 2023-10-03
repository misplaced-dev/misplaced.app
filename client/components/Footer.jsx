import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  const About = () => {
    navigation.navigate("About | Misplaced");
  };

  const openGithub = () => {
    Linking.openURL("https://github.com/misplaced-dev/misplaced");
  };
  const openContact = () => {
    Linking.openURL("https://github.com/dawitalemu4");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={About}>
        <Text style={styles.About}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openContact}>
        <Text style={styles.github}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGithub}>
        <Text style={styles.github}>Github</Text>
      </TouchableOpacity>
    </View>
  );
};

const isMobile = Platform.OS === "ios" || Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "80%",
    marginHorizontal: isMobile ? "30%" : "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#DEDEDE",
    border: "1px solid #171717",
    borderRadius: 5,
    marginBottom: 10,
  },
  About: {
    display: "flex",
  },
  github: {
    display: "flex",
  },
});

export default Footer;
