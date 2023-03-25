import React ,{ useState }  from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
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
    { id: 1, image: require('../assets/Hat.png') , price: [setPrice], title: [setTitle], location: [setLocation], description: [setDescription], contact:[setContact] },
     ];

{/*[setSelectedImage]}*/}

     const [selectedImage, setSelectedImage] = useState(false);
     const [Price, setPrice] = useState('');
     const [Title, setTitle] = useState('');
     const [Location, setLocation] = useState('');
     const [Description, setDescription] = useState('');
     const [Contact, setContact] = useState('');

     const openImagePicker = () => {
        ImagePicker.showImagePicker(options, response => {
          if (response.uri) {
            setSelectedImage(response.uri);
          }
        });
      };
      

  return (
    <View style={ {backgroundColor: '#f2f2f2',}}>
        <Text style={styles.header}>Create New Post</Text>
        <TouchableOpacity onPress={openImagePicker} style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 7, marginBottom: 10, marginTop: 10, marginRight: '40%', marginLeft: '40%', borderRadius: 20,}}
>
    {selectedImage ? (
      <Image source={{ uri: selectedImage }} style={styles.image} />
    ) : (
      <Text style={styles.upload}> Upload Image</Text>
    )}
  </TouchableOpacity>
  <Text style={styles.texts}>Title</Text>
        <TextInput
          value={Title}
          onChangeText={setTitle}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 12, marginBottom: 10, marginTop: 0, marginRight: '15%', marginLeft: '15%', borderRadius: 20,}}

        />
        <Text style={styles.texts}>Price</Text>
        <TextInput
          value={Price}
          onChangeText={setPrice}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 0, marginRight: '30%', marginLeft: '30%', borderRadius: 20,}}

        /> 
        <Text style={styles.texts}>Location</Text>
        <TextInput
          value={Location}
          onChangeText={setLocation}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 0, marginRight: '20%', marginLeft: '20%', borderRadius: 20,}}

        />
        <Text style={styles.texts}>Description</Text>
        <TextInput
          value={Description}
          onChangeText={setDescription}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1,  borderColor: 'black', padding: 10, paddingTop: 10, marginBottom: 10, marginTop: 0, marginRight: '5%', marginLeft: '5%', borderRadius: 20,}}

        />
    <Text style={styles.texts}>Contact</Text>
        <TextInput
          value={Contact}
          onChangeText={setContact}
          style={{textAlign: 'center', fontSize: 12, borderWidth: 1,  borderColor: 'black', padding: 10, paddingTop: 10, marginBottom: 10, marginTop: 0, marginRight: '15%', marginLeft: '15%', borderRadius: 20,}}

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
    <TouchableOpacity style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: '#ffbd03', paddingLeft: 2, paddingRight: 2, paddingBottom: 1, paddingTop: 7, marginBottom: 40, marginTop: 10, marginRight: '30%', marginLeft: '30%', borderRadius: 20,}}>
      <Text style={styles.texts}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
};


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
    overflow: 'hidden',
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
    resizeMode: 'cover',
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
    marginBottom: 30,
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

  
});

export default Postcards;