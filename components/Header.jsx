import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home | Misplaced');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/misplaced.png')} style={{ width: 330, height: 51 }} />
      </TouchableOpacity>
      
    </View>
  );
};

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: isMobile ? 36 : 70,
    paddingBottom: isMobile ? 80 : 70,
  },
  logo: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Header;