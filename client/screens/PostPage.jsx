import { View , Text, SafeAreaView, ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import HomeHeader from "../components/HomeHeader";

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <View>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <HomeHeader/>
                <PostPageContainer/>
            </ScrollView>
        </View>
    );
    }

export default PostPage;