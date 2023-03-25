import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';



const PostButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('New Post | Misplaced');
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/NewPostButton.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'sticky',
    bottom: 2,
    right: 2,
    backgroundColor: '#f2f2f2',
  },
  image: {
   width: 80,
    height: 80,
    zIndex: 10,
  },

});

export default PostButton;