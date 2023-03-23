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
                window.location.reload();
            } else {
                setError('Error: Try different username or email');
            }
        }).catch((err) => setError('Error: Try different username or email'));
    };

    return (
        <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{textAlign: 'center', fontSize: 20, borderWidth: 1, borderColor: 'black', borderRadius: 20, padding: 10, marginBottom: 10, marginTop: 10, marginRight: 30, marginLeft: 30,}}
      />
      <Text style={{textAlign: 'center', fontSize: 20}}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{textAlign: 'center', fontSize: 20, borderWidth: 1, borderColor: 'black', borderRadius: 20, padding: 10, marginTop: 10, marginBottom: 10, marginRight: 30, marginLeft: 30,}}
      />
      <Text style={{textAlign: 'center', fontSize: 20, color: 'red'}}>{error}</Text>
      <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#ffffff', padding: 10, borderRadius: 20, marginTop: 10, borderColor: 'black', marginRight: 30, marginLeft: 30, marginBottom: 10,}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup | Misplaced')} style={{marginTop: 10}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>Sign Up</Text>
      </TouchableOpacity>

      </View>
    );
};

export default LoginForm;