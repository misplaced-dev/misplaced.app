import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('New Post | Misplaced');
  };

  return (
    <View style={styles.container}>
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
});

export default PostButton;
