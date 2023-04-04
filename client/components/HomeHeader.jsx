import React, { useState, useEffect } from 'react';
import {  TouchableOpacity, View, StyleSheet, Animated, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  

  const handlePress = () => {
    navigation.navigate('Home | Misplaced');
  };

  let containerStyles = [styles.container];
  

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={handlePress}>
      <Animated.Image
        source={require('../assets/misplaced.png')}
        style={[styles.image, { opacity: animation }]}
        />
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
    paddingTop: isMobile ? 95 : 70,
    paddingBottom: 120,
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 330,
    height: 51,
    opacity: 0,
  },
  smallScreen: {
    paddingBottom: 260,
  },
  medScreen: {
    paddingBottom: 210,
  },
});

export default HomeHeader;