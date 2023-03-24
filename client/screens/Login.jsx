import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollViewIndicator>
                <Header/>   
                <LoginForm/>
            </ScrollViewIndicator>
        </SafeAreaView>
    );
    }

export default Login;