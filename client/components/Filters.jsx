import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Animated, Platform } from 'react-native';


function FiltersMenu() {
  const menuOptions = [    { text: 'Within 1 mile', value: 'Within1mile' },    { text: 'Within 3 miles', value: 'Within3miles' },    { text: 'Off Campus', value: 'OffCampus' },  ];

  const handleSelectOption = (value) => {
    console.log('Selected option:', value); // Replace with sorted data
  };


  return (
    <View >
      {menuOptions.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => {
            handleSelectOption(option.value);
            setShowMenu(false);
          }}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: '#ccc',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Filters(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isPressed, setIsPressed] = useState(props.isPressed);
  

  const handlePress = () => {
    setIsPressed(!isPressed);
    setShowMenu(!showMenu);
   
  };

  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

  const buttonStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: isPressed ? '#080001' : '#FFFEFB',
    borderBottomWidth: 0,
    borderBottomColor: '#171717',
    borderLeftWidth: 1,
    borderLeftColor: '#171717',
    borderTopWidth:  1 ,
    borderRightWidth: 0,
    borderRadius: 0,
    
  };


  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#FFFEFB',
        height: showMenu ? 185 : 50,
        width:  '50%',
        top: isMobile ? 210 : 180,
        right:  0,
       
        borderColor: '#171717',
       
        marginBottom: showMenu ? 150 : 0,
        zIndex: (isMobile && isPressed) || !isMobile ? 2 : 1,
      }}
    >
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: isPressed ? 'white' : 'black' }}>Filters</Text>
      </TouchableOpacity>
      {showMenu && (

          <FiltersMenu />
       
      )}
    </View>
  );
}

export default Filters;