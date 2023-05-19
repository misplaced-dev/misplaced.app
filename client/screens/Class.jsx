
import {View, ScrollView, StatusBar} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ClassStuff from "../components/ClassAssign";
import Header from "../components/Header";

const Class = () => {
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: '#f2f2f2',}}>
             <StatusBar barStyle="dark-content" />
            <ScrollView>
                <Header/>
                <ClassStuff />
            </ScrollView>
        </View>
    );
};


export default Class;