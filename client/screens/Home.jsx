import {View,Text,SafeAreaView,Image,TouchableOpacity,} from "react-native";
  import React, { useLayoutEffect } from "react";
  import * as Animatable from "react-native-animatable"; 
  import { useNavigation } from "@react-navigation/native";
  import { HeroImage } from "../assets";
 

  
  const Home = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <SafeAreaView className="bg-white flex-1 relative">
        {/* Header and Title: banner logo and Find Your Misplaced Items */}
  
        <View className="flex-row px-6 mt-8 items-center space-x-2">
          <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">*logo*</Text>
          </View>
  
          <Text className="text-[#2A2B4B] text-3xl font-semibold">Find Your Misplaced Items</Text>
        </View>
  
        {/* Filters: Towson University (check mark), At Location(Ex.Tower C), Within Past 3 Days
        Sort: Location Distance From You, Most Recent, Price (Low to High), Price (High to Low) */}
        <View className="px-6 mt-8 space-y-3">
          <Text className="text-[#3C6072] text-[42px]">Filter By:</Text>
          <Text className="text-[#00BCC9] text-[38px] font-bold">Sort By:</Text>
  
          <Text className="text-[#3C6072] text-base">
            Apply Filters
          </Text>
        </View>
  
        {/* Circle Section */}
        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
  
        {/* Image container */}
        <View className="flex-1 relative items-center justify-center">
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source={HeroImage}
            className="w-full h-full object-cover mt-20"
          />
  
          <TouchableOpacity
            onPress={() => navigation.navigate("PostPage")}
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
          >
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"15s"}
              className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            >
              <Text className="text-gray-50 text-[36px] font-semibold">Make a new Post</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;