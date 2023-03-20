import LogoBanner from '../assets/misplaced.svg';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import React from "react";

const Header = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <SafeAreaView>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home | Misplaced')}> 
        <Image source={require('../assets/misplaced.svg')} />
        </TouchableOpacity>          
        </View>
      </SafeAreaView>
  );
};

export default Header;