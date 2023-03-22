import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { PostService } from "../services/post.service";
import { MediaService } from "../services/media.service";
// import Image from 'react-native-remote-svg';

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

  return (
    <View>
       <Image source={require('../assets/profile.png') }style={{ width: 200, height: 200 }}/>
        <Text>{name}</Text>
        <Text>{username}</Text>
        <Text>--------------------</Text>
      
        {posts.map((post) => {
            return (
                <View key={post._id}>
                    <Text>post</Text>
                    <Text>{post.title}</Text>
                    <Text>{post.description}</Text>
                    <Text>{post.media}</Text>
                    <Text>{post.compensation}</Text>
                    {/* <Image source={{ uri: post.media }} style={{ width: 200, height: 200 }} /> */}
                    </View>
            );
        })}
    </View>
  );
};

export default ProfileContainer;
