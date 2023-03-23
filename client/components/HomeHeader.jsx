import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeHeader = () => {
  const navigation = useNavigation();
 

  const handlePress = () => {
    navigation.navigate('Home | Misplaced');
  };

  let containerStyles = [styles.container];
  

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/misplaced.png')} style={{ width: 330, height: 51 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 120,
    
  },
  logo: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  smallScreen: {
    paddingBottom: 260,
  },
  medScreen: {
    paddingBottom: 210,
  },
});


export default HomeHeader;

