import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';

const Signup = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollViewIndicator>
                <Header/>
                <SignupForm/>
            </ScrollViewIndicator>
        </SafeAreaView>
    );
};

export default Signup;