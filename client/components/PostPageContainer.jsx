import React from 'react';
import { StyleSheet, View, Image, Text , Dimensions } from 'react-native';

const Post = ({ price, title, location, description, contact, time}) => {
  return (  
      <View style={styles.Post} >
      <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.contact}>{contact}</Text>
      <Text style={styles.time}>{time}</Text>
      </View>
      </View>
    
  );
};
const Picture = ({ image }) => { 
  return (
    <View>
    <View style={styles.Post} >
      <View style={styles.box}>
        <Image source={{ uri : image }} style={styles.image} />
      </View>
      </View>
      </View>
  );};

  const bigScreen = Dimensions.get('window').width > 660;

const PostPageContainer = () => {

  const images = [ { id: 1, image: 'https://hmp.me/d29u', }, ];
  

  const posts = [
  { id:1, price: '$5', title: 'Towson Hat', location: 'Millennium Hall', description: 'This is my hat, I think I lost it while on the way to Panda Express, please contact me!!!', contact:'301-123-4567', time:'3 hours ago' }];

  return (
    <View style={ {backgroundColor: '#f2f2f2',}}>
      <Text style={styles.header}>Post Page</Text>
    <View style={styles.container}>
    {images.map(image => (
        <Picture
          key={image.id}
          image={image.image}
        />
      ))}
      {posts.map(post => (
        <Post
          key={post.id}
          
          price={post.price}
          title={post.title}
          location={post.location}
          description={post.description}
          contact={post.contact}
          time={post.time}
        />  
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: bigScreen ? 0 : 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    width: '100%',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 30,
    top: 0,
    marginTop: 0,
    backgroundColor: '#f2f2f2',
 },
  Post: {
    width: bigScreen ? 385 : 280,
    height: bigScreen ? 385 : 280,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    margin: bigScreen ? 70 : 20,
    marginTop: bigScreen ? 50 : 10,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'left',
    alignItems: 'left',
  },

  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: '#f2f2f2',
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
  description: {
    margin: 8,
  fontSize: 17,
  color: 'black',
  textAlign: 'left',
  overflowWrap: 'break-word',
  maxWidth: '100%',
  },
  contact: {
    margin: 8,
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
  },
  time: {
    margin: 8,
    fontSize: 10,
    color: 'gray',
    textAlign: 'left',
  },
});

{/*Make image and text bigger as page width gets bigger*/}

export default PostPageContainer;