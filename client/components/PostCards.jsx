import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Postcard = ({ image, price, title, location, onPress }) => {
  return (
    <TouchableOpacity style={styles.postcard} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
    </TouchableOpacity>
  );
};

const Postcards = ({ navigation }) => {
  const posts = [
    { id: 1, image: 'https://picsum.photos/200', price: '$100', title: 'Product 1', location: 'San Francisco' },
    { id: 2, image: 'https://picsum.photos/200', price: '$200', title: 'Product 2', location: 'New York' },
    { id: 3, image: 'https://picsum.photos/200', price: '$300', title: 'Product 3', location: 'Los Angeles' },
  ];

  return (
    <View style={styles.container}>
      {posts.map(post => (
        <Postcard
          key={post.id}
          image={post.image}
          price={post.price}
          title={post.title}
          location={post.location}
          onPress={() => navigation.navigate('PostPage | Misplaced')}
        />
      ))}
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
    backgroundColor: '#F5FCFF',
    padding: 10,
    marginTop: '20%',
  },
  postcard: {
    width: 280,
    height: 280,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#F5FCFF',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
  },
  price: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    margin: 8,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default Postcards;