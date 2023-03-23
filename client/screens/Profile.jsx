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
<<<<<<< HEAD
=======

>>>>>>> 5f7c412b0807e70ef876dd860ba77fe94076bded
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;