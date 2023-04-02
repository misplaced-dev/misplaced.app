import { View ,  ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";
import HomeHeader from "../components/HomeHeader";



const PostPage = ({route}) => {
    function getCurrentUrl() {
        console.log(route.params.key);
      }
      getCurrentUrl();
    const navigation = useNavigation();

    return (
        <View style={{backgroundColor:'#f2f2f2'}}>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <HomeHeader/>
                <PostPageContainer postid={route.params.key}/>
            </ScrollView>
        </View>
    );
    }

export default PostPage;