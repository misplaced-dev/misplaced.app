import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const PostButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('New Post | Misplaced');
  };

  return ( 
    <View>
   
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/NewPostButton.png')} style={styles.image} />
      </TouchableOpacity>
      
      </View> 
     
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zindex: 10,

  },
  image: {
   width: 80,
    height: 80,
    zIndex: 11,
    borderWidth: 9,
    borderColor: 'black',
    borderRadius: 50, 
    backgroundColor: 'black',
  },

});

export default PostButton;