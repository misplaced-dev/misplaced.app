import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

function FiltersMenu() {
  const menuOptions = [{ text: 'Within 1 mile', value: 'Within1mile', fontFamily: isMobile ? undefined : 'Inter' }, 
  { text: 'Within 3 miles', value: 'Within3miles', fontFamily: isMobile ? undefined : 'Inter'}, 
  { text: 'Off Campus', value: 'OffCampus', fontFamily: isMobile ? undefined : 'Inter'}];

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

 

  const buttonStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: isPressed ? '#080001' : '#f2f2f2',
    borderBottomWidth: 0,
    borderBottomColor: '#171717',
    borderLeftWidth: 1,
    borderLeftColor: '#171717',
    borderTopWidth:  1 ,
    borderRightWidth: 0,
    borderRadius: 0,
  };


  return (
    <View style={{
        position: 'absolute',
        backgroundColor: '#f2f2f2',
        height: showMenu ? 185 : 50,
        width:  '50%',
        top: isMobile ? 210 : 180,
        right: 0,    
        borderColor: '#171717',
        marginBottom: showMenu ? 150 : 0,
        zIndex: (isMobile && isPressed) || !isMobile ? 2 : 1,
      }}>
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: isPressed ? 'white' : 'black', fontFamily: isMobile ? undefined : 'Inter', }}>Filters</Text>
      </TouchableOpacity>
      {showMenu && (
          <FiltersMenu />
      )}
    </View>
  );
}

export default Filters;