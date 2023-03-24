import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';


const NotFound404 = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollViewIndicator>   
                <Header/>
            <Image source={require('../assets/NotFound.gif')} />
            </ScrollViewIndicator>
        </SafeAreaView>
    );
    }

export default NotFound404;