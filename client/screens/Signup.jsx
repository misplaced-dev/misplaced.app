import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignupForm from "../components/SignupForm";

const Signup = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                <SignupForm/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;