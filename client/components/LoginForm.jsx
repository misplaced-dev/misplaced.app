import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Platform} from 'react-native';
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
                  window.location.reload();
                
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

    const bigScreen = Dimensions.get('window').width > 660;

    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 

    return (
        <View>
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 100, fontFamily: 'Inter, Helvetica Neue'}}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{textAlign: 'center', 
        fontSize: 20, 
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 10, 
        padding: 10, 
        marginBottom: 10, 
        marginTop: 10, 
        marginRight: 
        bigScreen ? '25%' : '10%', 
        marginLeft: bigScreen ? '25%' : '10%',
        fontFamily: 'Inter, Helvetica Neue'}}
      />
      <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Inter, Helvetica Neue'}}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{textAlign: 'center', 
        fontSize: 20, 
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 10, 
        padding: 10, 
        marginTop: 10, 
        marginBottom: 10, 
        marginRight: bigScreen ? '25%' : '10%',
         marginLeft: bigScreen ? '25%' : '10%',
         fontFamily: 'Inter, Helvetica Neue'}}
      />
      <Text style={{textAlign: 'center', fontSize: 20, color: 'red', fontFamily: 'Inter, Helvetica Neue'}}>{error}</Text>
      <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#ffda70', 
      padding: 10, 
      paddingBottom: 10, 
      borderWidth: 1,
      borderColor: '#ffbd03',  
      marginTop: 15, 
      alignItems: 'center', 
      alignContent:'center', 
      alignSelf:'center', 
      width: 200, 
      borderRadius: 20, 
      marginBottom: 10,}}>
        <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight:'300', fontFamily: 'Inter, Helvetica Neue'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', fontSize: 20, fontStyle: 'italic', marginTop: 10, fontFamily: 'Inter, Helvetica Neue'}}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup | Misplaced')} style={{backgroundColor: '#ffda70', 
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
        <Text style={{alignSelf: 'center', fontSize: 17, color: 'black', fontWeight:'300', fontFamily: 'Inter, Helvetica Neue'}}>Signup</Text>
      </TouchableOpacity>

      </View>
    );
};

export default LoginForm;