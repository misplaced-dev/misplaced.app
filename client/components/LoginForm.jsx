import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthService} from '../services/auth.service';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            const storedUserId = await AuthService.getToken('userId').then((res) => {
                return res;
                });
                if (storedUserId !== null) {
                navigation.navigate('Home | Misplaced');
                }
        } catch (error) {
            console.log(error);
        }
      };

    const handleSubmit = () => {
        const user = {email, password};
        AuthService.login(user).then((res) => {
            if (res.status === 200) {
                AuthService.setToken('userId', res.data._id);
                navigation.navigate('Home | Misplaced');
            } else {
                setError('Error: Try different username or email');
            }
        }).catch((err) => setError('Error: Try different username or email'));
    };

    return (
        <View>
        <Text> Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text>{error}</Text>
        <TouchableOpacity onPress={handleSubmit}>
            <Text>Login</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup | Misplaced')}> 
            <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
};

export default LoginForm;