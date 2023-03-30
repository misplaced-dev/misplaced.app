import { View ,  ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import Header from "../components/Header";

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <View>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <Header/>
                <PostPageContainer/>
            </ScrollView>
        </View>
    );
    }

export default PostPage;