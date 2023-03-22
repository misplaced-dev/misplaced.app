import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Filters({ onPress }) {
 
  const [isPressed, setIsPressed] = useState(false);

  function SortMenu() {
    //dopdown menu for Sort By: Nearest, Recent, Price Low to High 
  } 
  
  function FilterMenu() {
   //dopdown menu for Filter By: Within 1 Mile, Within 5 Miles, Off Campus
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
    <View style={{ position: 'absolute', backgroundColor: '#F5FCFF', height: 50, width: '45%', top: 190, right:10, borderWidth: 1, borderColor: '#171717', borderRadius: 20}}>
      <TouchableOpacity
        onPressIn={handlePress}
        onPressOut={handlePress}
        style={buttonStyle}
      >
        <Text style={textStyle}>
          Filters
        </Text>
      </TouchableOpacity> 
    </View>
    
  );
}

export default Filters;
