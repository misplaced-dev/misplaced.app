import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostForm from "../components/PostForm";
import Header from "../components/Header";

const NewPost = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>   
                <Header/>
                <PostForm/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default NewPost;