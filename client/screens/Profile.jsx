import {View, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import HomeHeader from "../components/HomeHeader";

const Profile = () => {
    const navigation = useNavigation();

    return(
        <View>
            <ScrollView>
                <HomeHeader/>
                <ProfileContainer />
            </ScrollView>
        </View>
    );
};

export default Profile;