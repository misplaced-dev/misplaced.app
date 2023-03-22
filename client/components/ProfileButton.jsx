import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
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

  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

  const buttonStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isPressed ? '#080001' : '#F5FCFF',
    borderBottomWidth: 1,
  borderBottomColor: '#171717',
  borderLeftWidth: 1,
  borderLeftColor: '#171717',
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderRadius: 0,
  };

  const textStyle = {
    color: isPressed ? 'white' : 'black',
  };

  return (
    <View style={{ position: 'absolute', backgroundColor: '#F5FCFF', height: 50, width: isMobile ? '45%' : '50%', top: 130, right:10,  borderColor: '#171717', }}>
      <TouchableOpacity
        onPress={isLoggedIn ? handleProfile : handleLogin}
        onPressIn={handlePress}
        onPressOut={handlePress}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          {isLoggedIn ? 'Welcome Back!' : 'Login / Signup'}
        </Text>
      </TouchableOpacity> 
    </View>
  );
}

export default ProfileButton;
