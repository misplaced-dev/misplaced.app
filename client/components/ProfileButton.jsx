import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthService} from '../services/auth.service';


function ProfileButton() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
}, []);

const checkLoginStatus = async () => {
    try {
      const storedUserId = await AuthService.getToken('userId').then((res) => {
        return res;
        });
      if (storedUserId !== null) {
        setIsLoggedIn(true);

      }
    } catch (error) {
      console.log(error);
    }
};

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
    backgroundColor: isPressed ? '#080001' : '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#171717',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  };

  const textStyle = {
    color: isPressed ? 'white' : 'black',
    fontFamily: isMobile ? undefined : 'Inter',
  };

  return (
    <View style={{ position: 'absolute',
    backgroundColor: '#f2f2f2', 
    height: 50, width: '100%', 
    top: isMobile ? 160 : 130, 
    left: 0, right: 0,  
    borderColor: '#171717', }}>
      <TouchableOpacity
        onPress={isLoggedIn ? handleProfile : handleLogin}
        onPressIn={handlePress}
        onPressOut={handlePress}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          {isLoggedIn ? 'Profile' : '   Login / Signup'}
        </Text>
      </TouchableOpacity> 
    </View>
  );
}

export default ProfileButton;