import { View ,  SafeAreaView, ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostForm from "../components/PostForm";
import Header from "../components/Header";

const NewPost = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{backgroundColor: '#f2f2f2',}}>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <Header/>
                <PostForm/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default NewPost;