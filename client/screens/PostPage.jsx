import { SafeAreaView ,  ScrollView, StatusBar} from "react-native";
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
        <SafeAreaView style={{backgroundColor:'#FFFEFB'}}>
             <StatusBar barStyle="dark-content" />
            <ScrollView keyboardDismissMode = 'interactive'>   
                <Header/>
                <PostPageContainer postid={route.params.key}/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default PostPage;