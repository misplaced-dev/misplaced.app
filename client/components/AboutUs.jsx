import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text>About Us</Text>
      <Text>
        Misplaced is a lost and found app created to solve the problem of our
        current innefective lost and found systems. We are starting at Towson
        University and plan on taking over to the wrold!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "80%",
    marginLeft: "10%",
    marginTop: "2%",
    padding: 50,
    backgroundColor: "white",
    border: "1px solid #171717",
    borderRadius: 5,
  },
});

export default AboutUs;
