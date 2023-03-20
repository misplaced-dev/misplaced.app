import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";

const Profile = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;