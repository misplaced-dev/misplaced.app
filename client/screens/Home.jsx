import {View , ScrollView , StatusBar} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from '../components/HomeHeader.jsx';
import ProfileButton from "../components/ProfileButton.jsx";
import PostCards from "../components/PostCards.jsx";
import Filters from "../components/Filters.jsx";
import Sort from "../components/Sort.jsx";
import PostButton from "../components/PostButton.jsx";

 

  
  const Home = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <View style={{backgroundColor: '#f2f2f2',}}>
        <StatusBar barStyle="dark-content" />
      <ScrollView>
            <HomeHeader />
            <ProfileButton  />
            <Sort />
            <Filters />
            <PostCards />
        </ScrollView>
        <PostButton />
      </View >
    );
  };
  


  export default Home;