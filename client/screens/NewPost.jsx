import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostForm from "../components/PostForm";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';

const NewPost = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollViewIndicator>   
                <Header/>
                <PostForm/>
            </ScrollViewIndicator>
        </SafeAreaView>
    );
    }

export default NewPost;