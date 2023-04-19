import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Platform} from 'react-native';
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
            window.location.reload();
           
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

    const bigScreen = Dimensions.get('window').width > 660;
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

    
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 17, marginTop: 30, fontFamily: isMobile ? undefined : 'Inter'}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{textAlign: 'center', 
          fontSize: 17, 
          borderWidth: 1, 
          borderColor: 'black', 
          padding: 10, 
          marginBottom: 10, 
          marginTop: 10, 
          marginRight: bigScreen ? '25%' : '10%', 
          marginLeft: bigScreen ? '25%' : '10%', 
          borderRadius: 10,
          fontFamily: isMobile ? undefined : 'Inter'}}

        />
        <Text style={{textAlign: 'center', fontSize: 17, fontFamily: isMobile ? undefined : 'Inter'}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{textAlign: 'center', 
          fontSize: 17, 
          borderWidth: 1, 
          borderColor: 'black', 
          padding: 10, 
          marginBottom: 10, 
          marginTop: 10, 
          marginRight: bigScreen ? '25%' : '10%', 
          marginLeft: bigScreen ? '25%' : '10%', 
          borderRadius: 10,
          fontFamily: isMobile ? undefined : 'Inter'}}

        />
        <Text style={{textAlign: 'center', fontSize: 17, fontFamily: isMobile ? undefined : 'Inter'}}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={{textAlign: 'center', 
          fontSize: 17, borderWidth: 1, 
          borderColor: 'black', 
          padding: 10, 
          marginBottom: 10, 
          marginTop: 10, 
          marginRight: bigScreen ? '25%' : '10%',
          marginLeft: bigScreen ? '25%' : '10%', 
          borderRadius: 10,
          fontFamily: isMobile ? undefined : 'Inter'}}

        />
        <Text  style={{textAlign: 'center', fontSize: 17, fontFamily: isMobile ? undefined : 'Inter'}}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{textAlign: 'center', 
          fontSize: 17, 
          borderWidth: 1, 
          borderColor: 'black', 
          padding: 10, 
          marginBottom: 10, 
          marginTop: 10, 
          marginRight: bigScreen ? '25%' : '10%', 
          marginLeft: bigScreen ? '25%' : '10%', 
          borderRadius: 10,
          fontFamily: isMobile ? undefined : 'Inter'}}

        />
        <Text style={{textAlign: 'center', fontSize: 17, color: 'red', fontFamily: isMobile ? undefined : 'Inter'}}>{error}</Text>
        <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#ffda70',
        padding: 10, 
        paddingBottom: 12, 
        borderWidth: 1, 
        borderColor: '#ffbd03',  
        marginTop: 15, 
        width: 200, 
        borderRadius: 20, 
        marginBottom: 10, 
        alignItems: 'center', 
        alignContent:'center', 
        alignSelf:'center',}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black', fontWeight:'300', fontFamily: isMobile ? undefined : 'Inter'}}>Signup</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 17, fontStyle: 'italic', marginTop: 10, fontFamily: isMobile ? undefined : 'Inter'}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login | Misplaced')} style={{backgroundColor: '#ffda70', 
        paddingTop: 8, 
        paddingBottom: 9, 
        paddingLeft: 8, 
        paddingRight: 8, 
        borderWidth: 1, 
        borderColor: '#ffbd03',  
        marginTop: 15, 
        marginRight: 99, 
        marginLeft: 99, 
        borderRadius: 20, 
        marginBottom: 10, 
        width: 100, 
        alignItems: 'center', 
        alignContent:'center', 
        alignSelf:'center',}}>
        <Text style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight:'300', fontFamily: isMobile ? undefined : 'Inter'}}>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

export default SignUpForm;