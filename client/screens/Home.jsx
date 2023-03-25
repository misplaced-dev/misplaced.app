import {SafeAreaView , ScrollView} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from '../components/HomeHeader.jsx';
import ProfileButton from "../components/ProfileButton.jsx";
import PostCards from "../components/PostCards.jsx";
import Filters from "../components/Filters.jsx";
import Sort from "../components/Sort.jsx";
import PostButton from "../components/PostButton.jsx";
import ScrollViewIndicator from 'react-native-scroll-indicator';
 

  
  const Home = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <SafeAreaView>
      <ScrollViewIndicator style={{ scrollbarColor: 'black', scrollbarWidth: 2 }}>
            <HomeHeader />
            <ProfileButton  />
            <Sort />
            <Filters />
            <PostCards />
            <PostButton />
        </ScrollViewIndicator>
      </SafeAreaView>
    );
  };
  


  export default Home;