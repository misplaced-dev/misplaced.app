import React, { useState  } from 'react';
import { TouchableOpacity, Text, View, Animated, Platform } from 'react-native';



function SortMenu() {
  const menuOptions = [    { text: 'Nearest', value: 'nearest' },    { text: 'Recent', value: 'recent' },    { text: '$ Low to High', value: 'lowToHigh' },  ];

  const handleSelectOption = (value) => {
    console.log('Selected option:', value); // Replace with sorted data
  };

  

  return (
    <View style={{ marginTop: 10 }}>
      {menuOptions.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => {
            handleSelectOption(option.value);
            setShowMenu(false);
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
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

function Sort(props) {
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
    backgroundColor: isPressed ? '#080001' : '#f2f2f2',
    borderBottomWidth: 0,
    borderBottomColor: '#171717',
    borderLeftWidth: 0,
    borderLeftColor: '#171717',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRadius: 0,
    
  };




  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#f2f2f2',
        height: showMenu ? 185 : 50,
        width: '50%',
        top: 181,
        left:  0,
        
        borderColor: '#171717',
        
        marginBottom: showMenu ? 150 : 0,
        
        zIndex: (isMobile && isPressed) || !isMobile ? 2 : 1,

      }}
    >
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: isPressed ? 'white' : 'black' }}>Sort By</Text>
      </TouchableOpacity>
      {showMenu && (
          <SortMenu />
       
      )}
    </View>
  );
}

export default Sort;