import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import ScrollViewIndicator from 'react-native-scroll-indicator';

const Profile = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollViewIndicator>
                <Header/>
                <ProfileContainer />
            </ScrollViewIndicator>
        </SafeAreaView>
    );
};

export default Profile;