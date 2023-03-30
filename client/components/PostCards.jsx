import React, {useState,useEffect} from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity, StyleSheet, Button, FlatList, TextInput, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; 
import { PostService } from '../services/post.service';
import { MediaService } from '../services/media.service';
import {HERE_API_KEY} from "@env"
import axios from 'axios';
import reverse from 'reverse-geocode';


const Postcard = ({ image, price, title, location, onPress }) => {
  const [imageWidth, setImageWidth] = React.useState(0);

  const onImageLoad = ({nativeEvent}) => {
    const { width } = nativeEvent.source;
    setImageWidth(width);
  }

  return (
    <TouchableOpacity style={styles.postcard} onPress={onPress} >
      <View style={styles.imageContainer}>
          <ImageBackground
          source={{ uri: image }}
          onLoad={onImageLoad}
          style={{ width: '100%', height: '100%' , zIndex: 0, justifyContent: 'center', alignItems: 'center'}}
          imageStyle={{ resizeMode: 'cover' }}
        >
          <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <BlurView style={{ flex: 1 }} intensity={200} />
          </View>
          <Image source={{ uri: image }} onLoad={onImageLoad} style={styles.image}/>
             </ImageBackground>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.location}>{Math.round(location * 10) / 10} miles away</Text>
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

    /**
     * Fetches all posts from the database and adds the image url to each post
     *
     */
    const fetchPosts = async () => {
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
            setPosts(posts);
        } catch (error) {
            console.log(error);
        }
    };

// ------------------ TODO: ADD MOCK DATA TO DB------------------
//   const posts = [
//     { id: 1, image: 'https://hmp.me/d29u', price: '$5', title: 'Towson Hat', location: 'Millennium Hall' },
//     { id: 2, image: 'https://picsum.photos/200', price: '$200', title: 'Product 2', location: 'University Union' },
//     { id: 3, image: 'https://picsum.photos/200', price: '$300', title: 'Product 3', location: 'Tower C',},
//     { id: 4, image: 'https://picsum.photos/200', price: '$100', title: 'Product 1', location: 'Millennium Hall' },
//     { id: 5, image: 'https://picsum.photos/200', price: '$200', title: 'Product 2', location: 'University Union' },
//     { id: 6, image: 'https://picsum.photos/200', price: '$300', title: 'Product 3', location: 'Tower C' },
//     { id: 7, image: 'https://picsum.photos/200', price: '$300', title: 'Product 3', location: 'Tower C' },
//   ];

return (
    <View >
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {posts &&
            posts.map(post => (
              <Postcard
                key={post._id}
                image={post.image}
                price={post.compensation}
                title={post.title}
                location={post.distance}
                onPress={() => navigation.navigate('Post Page | Misplaced')}
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
