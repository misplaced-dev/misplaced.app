import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthService} from '../services/auth.service';
import ScrollViewIndicator from 'react-native-scroll-indicator';

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

        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!pattern.test(email)) {  
          setError('Error: Try different username or email');
          return;
        }

        AuthService.register(user).then((res) => {
            console.log(res);
            if (res.status === 201) {
                AuthService.setToken('userId', res.data._id);
                navigation.navigate('Home | Misplaced');
                window.location.reload();
            } else {
                setError('Error: Try different username or email');
                
            }
        }).catch((err) => {console.log(error); setError('Error: Try different username or email')});
    };

    
    return (
      <ScrollViewIndicator>
        <Text style={{textAlign: 'center', fontSize: 17, marginTop: 70,}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 10, marginRight: '10%', marginLeft: '10%', borderRadius: 20,}}

        />
        <Text style={{textAlign: 'center', fontSize: 17}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 10, marginRight: '10%', marginLeft: '10%', borderRadius: 20,}}

        />
        <Text style={{textAlign: 'center', fontSize: 17}}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 10, marginRight: '10%', marginLeft: '10%', borderRadius: 20,}}

        />
        <Text  style={{textAlign: 'center', fontSize: 17}}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{textAlign: 'center', fontSize: 17, borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, marginTop: 10, marginRight: '10%', marginLeft: '10%', borderRadius: 20,}}

        />
        <Text style={{textAlign: 'center', fontSize: 17, color: 'red'}}>{error}</Text>
        <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#f2f2f2', padding: 10, paddingBottom: 12, borderWidth: 1, borderColor: '#ffbd03',  marginTop: 15, marginRight: '20%', marginLeft: '20%', borderRadius: 20, marginBottom: 10,}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>Signup</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 17, fontStyle: 'italic', marginTop: 10}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login | Misplaced')} style={{backgroundColor: '#f2f2f2', paddingTop: 8, paddingBottom: 9, paddingLeft: 8, paddingRight: 8, borderWidth: 1, borderColor: '#ffbd03',  marginTop: 15, marginRight: 99, marginLeft: 99, borderRadius: 20, marginBottom: 10, width: 100, alignItems: 'center', alignContent:'center', alignSelf:'center',}}>
        <Text style={{textAlign: 'center', fontSize: 17, color: 'black'}}>Login</Text>
        </TouchableOpacity>
        </ScrollViewIndicator>
    );
};

export default SignUpForm;