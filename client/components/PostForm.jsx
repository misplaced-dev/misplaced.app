import React ,{ useState }  from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Platform, Dimensions , AppState} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const Postcard = ({ image, price, title, location, description, contact, onPress }) => {
  return (
    <View>
    <TouchableOpacity style={styles.postcard} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title}>Towson Hat{title}</Text>
      <Text style={styles.price}>$5{price}</Text>
      <Text style={styles.location}>University Union{location}</Text>
    </TouchableOpacity>
    <View>
    <Text style={styles.texts}>Description: {description}</Text>
    <Text style={styles.texts}>Contact: {contact}</Text>
    </View>
    </View>
  );
};

const Postcards = () => {
  const posts = [
    { id: 1, image: 'https://hmp.me/d29u', price: [setPrice], title: [setTitle], location: [setLocation], description: [setDescription], contact:[setContact] },
     ];

{/*[setSelectedImage]} for image:*/}

     const [selectedImage, setSelectedImage] = useState(false);
     const [Price, setPrice] = useState('');
     const [Title, setTitle] = useState('');
     const [Location, setLocation] = useState('');
     const [Description, setDescription] = useState('');
     const [Contact, setContact] = useState('');
     const [numberOfLines, setNumberOfLines] = useState(1);

  const handleContentSizeChange = (event) => {
    const { width } = event.nativeEvent.contentSize;
    const containerWidth = Dimensions.get('window').width * 0.9;

    if (width > containerWidth * 0.9) {
      setNumberOfLines(2);
    } else {
      setNumberOfLines(1);
    }
  };


//do isMobile for the image

     const openImagePicker = async () => {
     
     
      const options = {
        title: 'Select Photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          // You can now use the response.uri to display the selected image
          console.log(response.uri);
        }
      });}

      
      



  return (
    <View style={ {backgroundColor: '#f2f2f2',}}>
        <Text style={styles.header}>Create New Post</Text>
        <TouchableOpacity onPress={openImagePicker} style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 7, marginBottom: 10, marginTop: 10, marginRight: '40%', marginLeft: '40%', borderRadius: 20,}}
>
    {selectedImage ? (
      <Image source={{ uri: selectedImage }} style={styles.image} />
    ) : (
      <Text style={styles.upload}>Upload Image</Text>
    )}
  </TouchableOpacity>
  <Text style={styles.texttitle}>Title</Text>
        <TextInput
          value={Title}
          onChangeText={setTitle}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 12, marginBottom: 10, marginTop: 0, marginRight: '15%', marginLeft: '15%', borderRadius: 20,}}

        />
        <Text style={styles.texts}>Price</Text>
        <TextInput
          value={Price}
          onChangeText={setPrice}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 0, marginRight: isMobile ? '30%' : '40%', marginLeft: isMobile ? '30%' : '40%', borderRadius: 20,}}

        /> 
        <Text style={styles.texts}>Location</Text>
        <TextInput
          value={Location}
          onChangeText={setLocation}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 10,  marginBottom: 10, marginTop: 0, marginRight: isMobile ? '20%' : '30%', marginLeft: isMobile ? '20%' : '30%', borderRadius: 20,}}

        />
        <Text style={styles.texts}>Description</Text>
        <TextInput
           value={Description}
           onChangeText={setDescription}
           multiline={true}
           numberOfLines={numberOfLines}
           onContentSizeChange={handleContentSizeChange}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1,  borderColor: 'black', padding: 10, paddingBottom: 35, paddingTop: 10, marginBottom: 10, marginTop: 0, marginRight: '5%', marginLeft: '5%', borderRadius: 20,}}

        />
    <Text style={styles.texts}>Contact</Text>
        <TextInput
          value={Contact}
          onChangeText={setContact}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1,  borderColor: 'black', padding: 10, paddingTop: 10, marginBottom: 10, marginTop: 0, marginRight: isMobile ? '15%' : '30%', marginLeft: isMobile ? '15%' : '30%', borderRadius: 20,}}

        />
    <View style={styles.container}>
      {posts.map(post => (
        <Postcard
          key={post.id}
          image={post.image}
          price={post.price}
          title={post.title}
          location={post.location}
        />
      ))}
    </View>
    <TouchableOpacity onPress = {handleSubmit} style={{textAlign: 'center', fontSize: 17, borderWidth: 2, borderColor: '#ffbd03', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 11, marginBottom: 40, marginTop: 10, marginRight: '30%', marginLeft: '30%', borderRadius: 20,}}>
      <Text style={styles.texts}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
};


const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

const handleSubmit = () => {
  navigation.navigate('Home | Misplaced');
  window.location.reload();
  AppState.restart();
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
    height: 280,
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
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    objectFit: 'cover',
  objectPosition: 'center',
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
}
  
});

export default Postcards;