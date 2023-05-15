import { ScrollView, StatusBar} from "react-native";
import View from 'react-native-safe-area-view';
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Classstuff from "../components/Classstuff";
import Header from "../components/Header";


const Class = () => {

    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: '#f2f2f2',}}>
             <StatusBar barStyle="dark-content" />
              
                <Header/>
                <Classstuff/>
           
        </View>
    );
    }

export default Class;