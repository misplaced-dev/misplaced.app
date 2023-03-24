import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollViewIndicator>   
                <Header/>
                <PostPageContainer/>
            </ScrollViewIndicator>
        </SafeAreaView>
    );
    }

export default PostPage;