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
        <Text style={{textAlign: 'center', fontSize: 17}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, marginTop: 10, marginRight: 30, marginLeft: 30, borderRadius: 20,}}

        />
        <Text style={{textAlign: 'center', fontSize: 17}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, marginTop: 10, marginRight: 30, marginLeft: 30, borderRadius: 20,}}

        />
        <Text style={{textAlign: 'center', fontSize: 17}}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, marginTop: 10, marginRight: 30, marginLeft: 30, borderRadius: 20,}}

        />
        <Text  style={{textAlign: 'center', fontSize: 17}}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', borderRadius: 5, padding: 10, marginBottom: 10, marginTop: 10, marginRight: 30, marginLeft: 30, borderRadius: 20,}}

        />
        <Text>{error}</Text>
        <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#ffffff', padding: 10, borderRadius: 5, marginTop: 10, borderColor: 'black', marginRight: 30, marginLeft: 30, borderRadius: 20, marginBottom: 10,}}>
            <Text style={{textAlign: 'center', fontSize: 17, color: 'black'}}>Signup</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 17, fontStyle: 'italic', marginTop: 10}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login | Misplaced')} style={{marginTop: 10}}>
            <Text style={{textAlign: 'center', fontSize: 17, color: 'black'}}>Login</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SignUpForm;