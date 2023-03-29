import { Image, SafeAreaView, ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";


const NotFound404 = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
             <StatusBar barStyle="dark-content" />
            <ScrollView>   
                <Header/>
            <Image source={require('../assets/NotFound.gif')} style={{height:'80%', width:'80%', resizeMode: 'contain'}}/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default NotFound404;