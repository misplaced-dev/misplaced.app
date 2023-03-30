import React, {useState} from 'react';
import { ScrollView, KeyboardAvoidingView, ImageBackground, View, Image, Text, TouchableOpacity, StyleSheet, Button, FlatList, TextInput, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; 
import ImagePicker from 'react-native-image-picker';


const Postcard = ({ image, price, title, location, onPress, description, contact, }) => {
 
  return (
    <View>
     <TouchableOpacity style={styles.postcard} onPress={onPress} >
  
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
    </TouchableOpacity>
    <View>
    <Text style={styles.texts}>Description: {description}</Text>
    <Text style={styles.texts}>Contact: {contact}</Text>
    </View>
    </View>
  );
};

const PostForm = () => {
 
  const navigation = useNavigation();

  const posts = [
    {
      id: 1,
      image: selectedImage ? selectedImage.uri : '',
      price: Price,
      title: Title,
      location: Location,
      description: Description,
      contact: Contact
    }
  ];
  

const [selectedImage, setSelectedImage] = useState(false);
const [Price, setPrice] = useState('');
const [Title, setTitle] = useState('');
const [Location, setLocation] = useState('');
const [Description, setDescription] = useState('');
const [Contact, setContact] = useState('');
const [numberOfLines, setNumberOfLines] = useState(1);

 
const handlePriceChange = (text) => {
  setPrice(text);
}

const handleTitleChange = (text) => {
  setTitle(text);
}

const handleLocationChange = (text) => {
  setLocation(text);
}

const handleDescriptionChange = (text) => {
  setDescription(text);
}

const handleContactChange = (text) => {
  setContact(text);
}


const handleContentSizeChange = (event) => {
const { width } = event.nativeEvent.contentSize;
const containerWidth = Dimensions.get('window').width * 0.9;

if (width > containerWidth * 0.9) {
  setNumberOfLines(2);
} else {
  setNumberOfLines(1);
}
};


const handleImageUpload = () => {
  if (Platform.OS === 'web') {
    // Handle file upload for web
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage({ uri: reader.result });
      };
      reader.readAsDataURL(file);
    });
    input.click();
  } else {
    // Handle image picker for mobile
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage({ uri: response.uri });
      }
    });
  }
};

const handleImageDelete = () => {
  setSelectedImage(null);
};




  return (
   
    <View style={ {backgroundColor: '#f2f2f2',}}>
       <KeyboardAvoidingView behavior='position'>
     
        
  
<TextInput
  style={styles.input}
  multiline={true}
  numberOfLines={numberOfLines}
  placeholder="Enter a title"
  onChangeText={setTitle}
  value={Title}
  onContentSizeChange={handleContentSizeChange}
  scrollEnabled={false}
/>
<TextInput
  style={styles.input}
  multiline={true}
  numberOfLines={numberOfLines}
  placeholder="Enter a price"
  onChangeText={(text) => {
    let numericText = text.replace(/[^0-9]/g, '');
    setPrice('$' + numericText);
  }}
  value={Price}
  onContentSizeChange={handleContentSizeChange}
  keyboardType="numeric"
  scrollEnabled={false}
/>
<TextInput
  style={styles.input}
  multiline={true}
  numberOfLines={numberOfLines}
  placeholder="Enter a location"
  onChangeText={setLocation}
  value={Location}
  onContentSizeChange={handleContentSizeChange}
  scrollEnabled={false}
/>
<TextInput
  style={styles.input}
  multiline={true}
  numberOfLines={numberOfLines}
  placeholder="Enter a description"
  onChangeText={setDescription}
  value={Description}
  onContentSizeChange={handleContentSizeChange}
  scrollEnabled={false}
/>
<TextInput
  style={styles.input}
  multiline={true}
  numberOfLines={numberOfLines}
  placeholder="Enter a contact"
  onChangeText={setContact}
  value={Contact}
  onContentSizeChange={handleContentSizeChange}
  scrollEnabled={false}
/>
<TouchableOpacity onPress={selectedImage ? handleImageDelete : handleImageUpload} style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 10, marginBottom: 10, marginTop: 10, marginRight: '30%', marginLeft: '30%', borderRadius: 20,}}
>
    {selectedImage ? (
       <View style={styles.imageContainer}>
       <ImageBackground
       source={{ uri: selectedImage.uri }}
     
       style={{ width: '100%', height: '100%' , zIndex: 0, justifyContent: 'center', alignItems: 'center'}}
       imageStyle={{ resizeMode: 'cover' }}
     >
       <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
         <BlurView style={{ flex: 1 }} intensity={200} />
       </View>
       <Image source={{ uri: selectedImage.uri }} style={styles.image}/>
          </ImageBackground>
   </View>
    ) : (
      <Text style={styles.upload}>Upload Image</Text>
    )}
  </TouchableOpacity>

    <View style={styles.container}>
      {posts.map(post => (
      <Postcard
  price={Price}
  title={Title}
  location={Location}
  description={Description}
  contact={Contact}
/>
      ))}
    </View>
    <TouchableOpacity onPress = {handleSubmit} style={{textAlign: 'center', fontSize: 17, borderWidth: 2, borderColor: '#ffbd03', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 11, marginBottom: 40, marginTop: 10, marginRight: '30%', marginLeft: '30%', borderRadius: 20,}}>
      <Text style={styles.texts}>Create Post</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
   
   
  );
};


const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

const handleSubmit = () => {
  navigation.navigate('Home | Misplaced');
  window.location.reload();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginTop: 0,
  },
  postcard: {
    width: 280,
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#f2f2f2',
    overflow: 'auto',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 2,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  price: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  location: {
    margin: 8,
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
  },
    header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 50,
    top: 0,
    marginTop: 0,
 },
    texts: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
    top: 0,
    backgroundColor: '#f2f2f2',
  },
    upload: {
      fontSize: 15,
      textAlign: 'center',
      color: '#000',
      marginBottom: 10,
      top: 0,
 },
texttitle:{
  fontSize: 15,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    top: 0,
    backgroundColor: '#f2f2f2',
},
input:{
  textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', paddingLeft: 2, paddingRight: 2, paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 5, marginRight: '15%', marginLeft: '15%', borderRadius: 20,

},
  
});

export default PostForm;