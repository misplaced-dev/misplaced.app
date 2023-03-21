import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProfileButton({ isLoggedIn }) {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  function handleLogin() {
    navigation.navigate('Login | Misplaced');
  }

  function handleProfile() {
    navigation.navigate('Profile | Misplaced');
  }

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const buttonStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isPressed ? '#080001' : '#F5FCFF',
    borderWidth: 1,
    borderColor: '#171717',
    borderRadius: 20,
  };

  const textStyle = {
    color: isPressed ? 'white' : 'black',
  };

  return (
    <View style={{ position: 'absolute', backgroundColor: '#F5FCFF', height: 50, width: '45%', top: 130, right:10, borderWidth: 1, borderColor: '#171717', borderRadius: 20}}>
      <TouchableOpacity
        onPress={isLoggedIn ? handleProfile : handleLogin}
        onPressIn={handlePress}
        onPressOut={handlePress}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          {isLoggedIn ? 'Welcome Back!' : 'Login'}
        </Text>
      </TouchableOpacity> 
    </View>
  );
}

export default ProfileButton;
