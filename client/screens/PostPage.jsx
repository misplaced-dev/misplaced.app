import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import Header from "../components/Header";

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>   
                <Header/>
                <PostPageContainer/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default PostPage;