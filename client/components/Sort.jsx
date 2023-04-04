import React, { useState  } from 'react';
import { TouchableOpacity, Text, View, Animated, Platform } from 'react-native';



function SortMenu() {
  const menuOptions = [    { text: 'Nearest', value: 'nearest' },    { text: 'Recent', value: 'recent' },    { text: '$ Low to High', value: 'lowToHigh' },  ];

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
        top: isMobile ? 210 : 180,
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

{/* const fetchPosts = async () => {
  try {
      // get all posts
      const posts = await PostService.getPostsInDistance(2000).then((res) => {
          return res.data;
      });
      // for each post, get the image url from media service
      for (let i = 0; i < posts.length; i++) {
          const media = await MediaService.getMediaByPostId(posts[i]._id).then((res) => {
              return res.data[0].url;
          });
          posts[i].image = media;
      }
      // add location label to each post
      for (let i = 0; i < posts.length; i++) {
          const lat = posts[i].location.latitude;
          const lng = posts[i].location.longitude;
          const res = reverse.lookup(lat,lng, 'us')
          console.log(res)
          const location = await axios.get(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=en-US&apiKey=${HERE_API_KEY}`)
          .then((res) => {
              console.log(res.data)
              return res.data.items[0].address.street + ', ' + res.data.items[0].address.city + ', ' + res.data.items[0].address.stateCode;
          })
          .catch((err) => {
              console.log(err)
          })
          posts[i].locationLabel = location;
        }
      console.log(posts);
        setPosts(posts);
  } catch (error) {
      console.log(error);
  }
};*/}