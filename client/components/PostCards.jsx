import React, {useState,useEffect} from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; 
import { PostService } from '../services/post.service';
import { MediaService } from '../services/media.service';

const Postcard = ({ image, price, title, location, onPress,  }) => {

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
      <View style={{borderTopColor: 'grey', borderTopWidth: 1,}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  
  );
};

const Postcards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

const navigation = useNavigation();

useEffect(() => {
  setLoading(true);
  fetchPosts();
  
}, []);
  
const fetchPosts = async () => {
  try {
    const posts = await PostService.getPostsInDistance(2000).then((res) => {
      return res.data;
    });
      for (let i = 0; i < posts.length; i++) {
        const media = await MediaService.getMediaByPostId(posts[i]._id).then((res) => {
        return res.data[0].url;
      });
        posts[i].image = media;
      }
        setPosts(posts);
        setLoading(false);
  } catch (error) {
      console.log(error);
      setLoading(false);
  }
};

      
  return (
    <View >
    {loading ? (
      <View>
       <Image source={require('../assets/buffer.gif')} 
       style={{ borderWidth: 1, 
       borderRadius: 20, 
       alignSelf:'center', 
       marginTop: 130, 
       marginBottom: 230, 
       width: 280, 
       height: 280 }} />
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
          onPress={() => navigation.navigate('Post Page | Misplaced', { key: post._id })}
        />
      ))}
    </View>
    )}
    </View>
  );
};

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: 'black',
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
    fontWeight: '700',
    textAlign: 'left',
     
  },
  price: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight:"600",
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