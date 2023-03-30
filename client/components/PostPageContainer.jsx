import React, {useRef,useEffect, useState} from 'react';
import { StyleSheet, View, Image, Text , Dimensions, Platform, ImageBackground} from 'react-native';
import {GOOGLE_MAPS_API_KEY} from "@env";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { BlurView } from 'expo-blur';
import { PostService } from '../services/post.service';
import Postcards, {id} from './PostCards';


const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 


const Post = ({ price, title, location, description, contact, time, id}) => {
  
  const mapRef = useRef(null);
 

 


  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCamera({
        center: {
          latitude: 39.3941,
          longitude: -76.610,
        },
        heading: 270,
        pitch: 0,
        zoom: 15,
      });
    }
  }, []);

  return (  
   <View>
      <View style={styles.Post}>
      <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.contact} href={`tel:${contact}`}>{contact}</Text>
      <Text style={styles.time}>{time}</Text>
      </View>
      </View>
      {isMobile && (
      <MapView
         style={{ flex: 1, marginBottom: isMobile ? 400 : 0 , display: isMobile ? 'flex' : 'none'}} 
         provider={PROVIDER_GOOGLE}
         ref={mapRef}
         showsUserLocation
         showsPointsOfInterest={false}
         showsMarkers={false}
         showsIndoorLevelPicker={false}
         initialRegion={{
          latitude: 39.3939,
          longitude: -76.6086,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          heading: 90,}}
          
      >
    <Marker coordinate={{latitude: 39.3939, longitude: -76.6095,  }} image={require('../assets/TU.png')}calloutVisible={true}  >
      <Callout>
        <Text>Towson Univeristy</Text>
      </Callout>
    </Marker>

    <Marker coordinate={{latitude: 39.39384068536044, longitude: -76.6180108724627,  }} calloutVisible={true}  >
      <Callout>
        <Text>West Vilage Commons</Text>
      </Callout>
    </Marker>
    
    <Marker coordinate={{latitude: 39.39227482925432, longitude:  -76.60999425402817,  }} calloutVisible={true}  >
      <Callout>
        <Text>Glen Complex</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.3939, longitude: -76.6095,  }} calloutVisible={true}  >
      <Callout>
        <Text>Newell/TowsonTown</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.39417207241408, longitude: -76.60577376207497,  }} calloutVisible={true}  >
      <Callout>
        <Text></Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.393523281066486 , longitude: -76.61111404007521,  }} calloutVisible={true}  >
      <Callout>
        <Text>University Union</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.39514136913082, longitude: -76.61242323031405,  }} calloutVisible={true}  >
      <Callout>
        <Text>Burdick Hall</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.393563888113746 , longitude: -76.60648121999584,  }} calloutVisible={true}  >
      <Callout>
        <Text>Cook Library</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.394086919969965, longitude: -76.60876187241544,  }} calloutVisible={true}  >
      <Callout>
        <Text>Freedom Square</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.390954317600546, longitude: -76.60589526146042,  }} calloutVisible={true}  >
      <Callout>
        <Text>Math And Science Complex</Text>
      </Callout>
    </Marker>
    <Marker coordinate={{latitude: 39.39505854227851, longitude: -76.60425911396142,  }} calloutVisible={true}  >
      <Callout>
        <Text>Scarborough and Prettyman Hall</Text>
      </Callout>
    </Marker>
</MapView>
      )}

      </View   >
  );
};
 
const Picture = ({ image }) => { 
 
  return (
    <View>
    <View style={styles.Post} >
      <View style={styles.box}>
      <ImageBackground
          source={{ uri: image }}
         
          style={{ width: '100%', height: '100%' , zIndex: 0, justifyContent: 'center', alignItems: 'center'}}
          imageStyle={{ resizeMode: 'cover', transform: [{ scale: 1.75 }] }}
        >
          <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <BlurView style={{ flex: 1 }} intensity={200} />
          </View>
          <Image source={{ uri: image }}  style={styles.image}/>
             </ImageBackground>
      </View>
      </View>
      </View>
  );};

  const bigScreen = Dimensions.get('window').width > 660;

const PostPageContainer = () => {

  const [post,setPost] = useState({});
  const images = [ { id: 1, image: 'https://hmp.me/d29u', }, ];
  
  const fetchById = async () => {
    try {
      const post = await PostService.getPostById(post._id).then((res) => {
        console.log(res)
        return res.data;
      });
      setPost(post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchById();
  }, []);


 
  return (
    <View style={ {backgroundColor: '#f2f2f2',}}>
     
   <View style={styles.container}>
    {images.map(image => (
        <Picture
          key={image.id}
          image={image.image}
        />
      ))}   
        <Post
          id={post._id}
          title={post.title} 
          price={post.compensation}
          location={post.location}
          description={post.description}
          contact={post.contact}
          time={post.time}
        />  
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


export default PostPageContainer;