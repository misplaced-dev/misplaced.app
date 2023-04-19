import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur'; 
import React, { useEffect, useState } from "react";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { PostService } from "../services/post.service";
import { MediaService } from "../services/media.service";


const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

const Postcard = ({ image, price, title, location, onPress, }) => {
  return (
    <TouchableOpacity style={styles.postcard} onPress={onPress}>
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

const ProfileContainer = () => {
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('');
    const [posts, setPosts] = React.useState([]);
    const navigation = useNavigation();

    useEffect( () => {
        checkLoginStatus();
    }, []);
    
    const checkLoginStatus = async () => {
        try {
            const storedUserId = await AuthService.getToken('userId').then((res) => {
                return res;
                });
                if (storedUserId !== null) {
                    fetchProfile(storedUserId);
                } else {
                    navigation.navigate('Login | Misplaced');
                }
        } catch (error) {
            console.log(error);
            navigation.navigate('Not Found | Misplaced');
        }
      };

    const fetchProfile = async (userId) => {
        try {
            const user = await UserService.getUser(userId).then((res) => {
                return res;
            });
            setName(user.data.name);
            setUsername(user.data.username);

            const posts = await PostService.getPostsByUserId(userId).then(async (res) => {
                return res.data;
            });
            for (let i = 0; i < posts.length; i++) {
                const media = await MediaService.getMediaByPostId(posts[i]._id).then((res) => {
                return res.data[0].url;
            });
            posts[i].media = media;
        }
            setPosts(posts);

        // setProfilePic(newProfilePic);
        } catch (error) { 
            console.log(error);
        }
        
    };

    const handleLogout  = async () => {
     
        console.log('logging out');
        await AuthService.signout("userId");
        navigation.navigate('Home | Misplaced');
        if(Platform.OS === 'web'){ window.location.reload();}
     
     
    }

       

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#f2f2f2',}}>
       <Image source={require('../assets/profile.png') }style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 30, }}/>
       <Text style={{textAlign: 'center', fontSize: 25, paddingTop: 15, fontFamily: isMobile ? undefined : 'Inter'}}>Welcome Back {name}!</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'grey', padding: 10, fontFamily: isMobile ? undefined : 'Inter'}}>{username}</Text>
        
        <TouchableOpacity onPress={handleLogout} style={{textAlign: 'center', 
        fontSize: 20, 
        padding: 10, 
        borderWidth: 2,
        backgroundColor: '#f2f2f2',  
        marginTop: 20, 
        borderColor: 'black', 
        marginRight: 30, 
        marginLeft: 30, 
        borderRadius: 20, 
        marginBottom: 30,}}>
            <Text style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight:'300', fontFamily: isMobile ? undefined : 'Inter'}}>Logout</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', fontSize: 30, fontFamily: isMobile ? undefined : 'Inter'}}>Posts</Text>

        <View style={styles.container}>
        {posts.map(post => (
        <Postcard
          key={post._id}
          image={post.media}
          price={post.compensation}
          title={post.title}
            location={post.location}
          onPress={() => navigation.navigate('Post Page | Misplaced',{ key: post._id })}
        />
      ))}
    </View>    
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
    marginTop: 20,
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
    overflow: 'hidden'
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
    fontFamily: isMobile ? undefined : 'Inter'
  },
  price: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    fontFamily: isMobile ? undefined : 'Inter'
  },
  location: {
    margin: 8,
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
    fontFamily: isMobile ? undefined : 'Inter'
  },
});

export default ProfileContainer;