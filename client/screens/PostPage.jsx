import { View ,  ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import Header from "../components/Header";



const PostPage = ({route}) => {
    function getCurrentUrl() {
        console.log(route.params.key);
      }
      getCurrentUrl();
    const navigation = useNavigation();

    return (
        <View>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <Header/>
                <PostPageContainer postid={route.params.key}/>
            </ScrollView>
        </View>
    );
    }

export default PostPage;