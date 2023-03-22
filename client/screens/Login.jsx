import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <Header/>   
                <LoginForm/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default Login;