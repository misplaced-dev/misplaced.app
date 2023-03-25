import {SafeAreaView , ScrollView} from "react-native";
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
      <SafeAreaView>
      <ScrollView>
            <HomeHeader />
            <ProfileButton  />
            <Sort />
            <Filters />
            <PostCards />
            <PostButton style={{position: 'sticky',}}/>
        </ScrollView>
      </SafeAreaView>
    );
  };
  


  export default Home;