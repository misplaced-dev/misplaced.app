import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";


const NotFound404 = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>   
                <Header/>
            <Image source={require('../assets/NotFound.gif')} />
            </ScrollView>
        </SafeAreaView>
    );
    }

export default NotFound404;