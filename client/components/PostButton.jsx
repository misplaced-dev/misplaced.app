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
    bottom: '1%',
    right: '2%',
    backgroundColor: '#f2f2f2',
    zindex: 10,
    borderRadius: 50,
    width: 83,
    height: 84,
    borderWidth: 3,
    borderColor: 'red',
  },
  image: {
   width: 80,
    height: 80,
    zIndex: 11,
  },

});

export default PostButton;