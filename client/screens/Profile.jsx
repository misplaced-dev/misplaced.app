import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";

const Profile = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                <Header/>
                <ProfileContainer />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;