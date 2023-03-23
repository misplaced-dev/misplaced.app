import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { PostService } from "../services/post.service";
import { MediaService } from "../services/media.service";


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
            navigation.navigate('NotFound404 | Misplaced');
        }
      };

    const fetchProfile = async (userId) => {
        try {
            const user = await UserService.getUser(userId).then((res) => {
                return res;
            });
            setName(user.data.name);
            setUsername(user.data.username);
           const newProfilePic = await MediaService.getMediaByUserId(userId).then((res) => {
                return res.data[0].url;
            });

            const posts = await PostService.getPostsByUserId(userId).then(async (res) => {
                res.data.forEach(async (post) => {
                    const media = await MediaService.getMediaByPostId(post._id).then((res) => {
                        return res.data[0].url;
                    });
                    post.media = media;
                });
                return res.data;
            });
            console.log(posts);
            setPosts(posts);

        setProfilePic(newProfilePic);
        } catch (error) { 
            console.log(error);
        }
        
    };

    const handleLogout  = async () => {
      try {
        console.log('logging out');
        await AuthService.signout("userId");
        navigation.navigate('Home | Misplaced');
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

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

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/profile.png') }style={{ alignSelf: 'center', width: 100, height: 100 }}/>
       <Text style={{textAlign: 'center', fontSize: 25, paddingTop: 15,}}>Welcome Back!</Text>
        <Text style={{textAlign: 'center', fontSize: 20, padding: 10,}}>{name}</Text>
        <Text style={{textAlign: 'center', fontSize: 15, fontStyle:'italic', padding: 10,}}>{username}</Text>
        
        <TouchableOpacity onPress={handleLogout} style={{textAlign: 'center', fontSize: 20, padding: 10, borderWidth: 1, backgroundColor: '#ffffff',  marginTop: 10, borderColor: 'black', marginRight: 30, marginLeft: 30, borderRadius: 20, marginBottom: 30,}}>
            <Text style={{textAlign: 'center', fontSize: 17, color: 'black'}}>Logout</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', fontSize: 30}}>Posts</Text>

        <View style={styles.container}>
        {posts.map((post) => {
            return (
          <Postcard
          key={post.id}
          image={post.image}
          price={post.price}
          title={post.title}
          location={post.location}
          onPress={() => navigation.navigate('PostPage | Misplaced')}
         />


                // <View key={post._id}>
                    
                //     <Text>{post.title}</Text>
                //     <Text>{post.description}</Text>
                //     <Text>{post.media}</Text>
                //     <Text>{post.compensation}</Text>
                //     onPress={() => navigation.navigate('PostPage | Misplaced')}
                //     </View>
            );
        })}
    </View>    
    </View>
  );
};

export default ProfileContainer;
//function handleLogout() {
    // handle logout
    //navigation.navigate('Home | Misplaced');
    // window.location.reload();
  //}
