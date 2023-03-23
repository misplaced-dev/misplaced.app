import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ModeToggle({ isLoggedIn }) {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

  function handleLogin() {
    navigation.navigate('Profile | Misplaced');
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
    borderBottomWidth: 1,
    borderBottomColor: '#171717',
    borderLeftWidth: 0,
    borderRightColor: '#171717',
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderRadius: 0,
    
  };

  const textStyle = {
    color: isPressed ? 'white' : 'black',
  };

  return (
    <View style={{ position: 'absolute', backgroundColor: '#F5FCFF', height: 50, width: '50%', top: 130, left:10,  borderColor: '#171717', zIndex: (isMobile && isPressed) || !isMobile ? 1 : 0,  }}>
      <TouchableOpacity
        onPress={isLoggedIn ? handleProfile : handleLogin}
        onPressIn={handlePress}
        onPressOut={handlePress}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          {isLoggedIn ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity> 
    </View>
  );
}

export default ModeToggle;
