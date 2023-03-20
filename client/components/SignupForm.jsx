import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthService} from '../services/auth.service';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
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
        const user = {
            name,
            email,
            username,
            password
        };
        AuthService.register(user).then((res) => {
            console.log(res);
            if (res.status === 201) {
                AuthService.setToken('userId', res.data._id);
                navigation.navigate('Home | Misplaced');
            } else {
                setError('Error: Try different username or email');
            }
        }).catch((err) => setError('Error: Try different username or email'));
    };

    return (
        <View>
        <Text>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
        />
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
        />
        <Text>Username:</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
        />
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text>{error}</Text>
        <TouchableOpacity onPress={handleSubmit}>
            <Text>Signup</Text>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login | Misplaced')}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SignUpForm;