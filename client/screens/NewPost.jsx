import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostForm from "../components/PostForm";
import HomeHeader from "../components/HomeHeader";

const NewPost = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ScrollView keyboardDismissMode = 'interactive'>   
                <HomeHeader/>
                <PostForm/>
            </ScrollView>
        </View>
    );
    }

export default NewPost;