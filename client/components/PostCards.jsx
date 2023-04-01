import React, {useState,useEffect} from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity, StyleSheet, Button, FlatList, TextInput, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; 
import { PostService } from '../services/post.service';
import { MediaService } from '../services/media.service';
import {HERE_API_KEY} from "@env"
import axios from 'axios';

const Postcard = ({ image, price, title, location, onPress,  }) => {
  const [imageWidth, setImageWidth] = React.useState(0);

  

  return (

    <TouchableOpacity style={styles.postcard} onPress={onPress} >
      <View style={styles.imageContainer}>
          <ImageBackground
          source={{ uri: image }}
         
          style={{ width: '100%', height: '100%' , zIndex: 0, justifyContent: 'center', alignItems: 'center'}}
          imageStyle={{ resizeMode: 'cover', transform: [{ scale: 1.75 }] }}
        >
          <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <BlurView style={{ flex: 1 }} intensity={200} />
          </View>
          <Image source={{ uri: image }} style={styles.image}/>
             </ImageBackground>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
    </TouchableOpacity>
  
  );
};

const Postcards = () => {
  const [posts, setPosts] = useState([]);
  const [loading , setLoading] = useState(true);

const navigation = useNavigation();

useEffect(() => {
  setLoading(true);
  fetchPosts();
  setLoading(false);
}, []);
  
const fetchPosts = async () => {
  try {
      // get all posts
      const posts = await PostService.getPostsInDistance(2000).then((res) => {
        console.log(res)
          return res.data;
      });
      // for each post, get the image url from media service
      for (let i = 0; i < posts.length; i++) {
      //  console.log(posts[i]);  
        const media = await MediaService.getMediaByPostId(posts[i]._id).then((res) => {
    //    console.log(res);
              return res.data[0].url;
          });
          posts[i].image = media;
      }
  
    //  console.log(posts);
        setPosts(posts);
  } catch (error) {
      console.log(error);
  }
};

      
  return (
    <View >
    {loading ? (
      <View>
       <Image source={require('../assets/buffer.gif')} style={{ width: 280, height: 51 }} />
      </View>
    ) : (
    <View style={styles.container}>
      {posts.map(post => (
        <Postcard
          key={post._id}
          image={post.image}
          price={post.compensation}
          title={post.title}
     location={post.location}
          onPress={() => navigation.navigate('Post Page | Misplaced',{ key: post._id })}
        />
      ))}
    </View>
    )}
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
    backgroundColor: '#FFFEFB',
    padding: 10,
    marginTop: 100,
  },
  postcard: {
    width: 330,
    height: 330,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 5,
    backgroundColor: '#FFFEFB',
    overflow: 'auto',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#FFFEFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default Postcards;