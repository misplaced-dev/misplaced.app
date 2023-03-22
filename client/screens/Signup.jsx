import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

const Signup = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                <Header/>
                <SignupForm/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;