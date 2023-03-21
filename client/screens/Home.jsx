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

  {/*<SafeAreaView className="bg-white flex-1 relative">
        

        <View className="flex-row px-6 mt-8 items-center space-x-2">
          <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">*logo*</Text>
          </View>

  <ScrollView>
    <Header/>
                  
                 

         
          <Text className="text-[#2A2B4B] text-3xl font-semibold">Find Your Misplaced Items</Text>
        </View>


        {/* Filters: Towson University (check mark), At Location(Ex.Tower C), Within Past 3 Days
        Sort: Location Distance From You, Most Recent, Price (Low to High), Price (High to Low) 
        <View className="px-6 mt-8 space-y-3">
        {/* Filters: Towson University (check mark), At Location(Ex.Tower C), Within Past 3 Days 
        {/* Sort: Location Distance From You, Most Recent, Price (Low to High), Price (High to Low) 

          <Text className="text-[#3C6072] text-[42px]">Filter By:</Text>
          <Text className="text-[#00BCC9] text-[38px] font-bold">Sort By:</Text>
         <Text className="text-[#00BCC9] text-[38px] font-bold">Sort By:</Text>

          <Text className="text-[#3C6072] text-base">
            Apply Filters
          </Text>
        </View>


        {/* Circle Section 
        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>


        {/* Image container 
        <View className="flex-1 relative items-center justify-center">
       <View className="flex-1 relative items-center justify-center"> 
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
@@ -52,19 +52,20 @@ import {View,Text,SafeAreaView,Image,TouchableOpacity,} from "react-native";
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("PostPage")}
            onPress={() => navigation.navigate("Login | Misplaced")}
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
          >
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"15s"}
              iterationCount= {"infinite"}
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">Make a new Post</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
        </View> 
        </ScrollView>
</SafeAreaView>*/}