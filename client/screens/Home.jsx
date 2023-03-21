import {View,Text,SafeAreaView,Image,TouchableOpacity,} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header.jsx';
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
        <View>
            {/*<Header/>*/}
            {/*Filters and Sorts and Apply Filters*/}
            {/*PostCard Conatiner*/}
            {/*Top right Profile Button: Login/Signn up button or profile pic if logged in*/}

            <Header />
            <Sort />
            <Filters />
            <PostCards />
            <ProfileButton />
            <ModeToggle />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;