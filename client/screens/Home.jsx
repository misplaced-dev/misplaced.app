import {SafeAreaView,ScrollView} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from '../components/HomeHeader.jsx';
import ProfileButton from "../components/ProfileButton.jsx";
import PostCards from "../components/PostCards.jsx";
import Filters from "../components/Filters.jsx";
import Sort from "../components/Sort.jsx";
import ModeToggle from "../components/ModeToggle.jsx";

 

  
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
            <ModeToggle />
            <ProfileButton  />
            <Sort />
            <Filters />
            <PostCards />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Home;

  