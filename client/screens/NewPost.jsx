import { View , Text, SafeAreaView, ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostForm from "../components/PostForm";
import HomeHeader from "../components/HomeHeader";

const NewPost = () => {

    const navigation = useNavigation();

    return (
        <View>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <HomeHeader/>
                <PostForm/>
            </ScrollView>
        </View>
    );
    }

export default NewPost;