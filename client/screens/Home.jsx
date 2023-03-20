import {View,Text,SafeAreaView,Image,TouchableOpacity,} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
 

  
  const Home = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <SafeAreaView className="bg-white flex-1 relative">
        <View>
            <Text className="text-red-500">Hello World</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;