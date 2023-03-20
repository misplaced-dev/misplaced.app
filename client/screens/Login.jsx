import { View , Text, SafeAreaView, ScrollView,} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>    
                <LoginForm/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default Login;