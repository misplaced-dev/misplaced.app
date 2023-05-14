import React, {useState} from 'react';
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Platform } from 'react-native';



const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('https://webdevbasics.net/scripts/javajam8.php', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Handle success
      console.log('Email sent successfully!');
    } else {
      // Handle error
      console.error('Failed to send email.');
    }
  };

  return (
    <View style={styles.container}>
        <Text>HTML Table</Text>
      <table style={styles.table}>
        <thead>
          <tr>
          <th style={styles.cell}>Tech</th>
            <th style={styles.cell}>Events</th>
            <th style={styles.cell}>Plans</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell}>MERN Stack</td>
            <td style={styles.cell}>Started Spring Break to self-teach React Native</td>
            <td style={styles.cell}>Pass code audit by Towson U IT dept.</td>
          </tr>
          <tr>
            <td style={styles.cell}>Javascript</td>
            <td style={styles.cell}>Went to final round in competiton and lost</td>
            <td style={styles.cell}>Get Misplaced to other universities</td>
          </tr>
          <tr>
            <td style={styles.cell}>Cloudinary</td>
            <td style={styles.cell}>Had first meeting with Towson VP to establish Misplaced at Towson</td>
            <td style={styles.cell}>Get a good job at a big tech company and forget about this (jk)</td>
          </tr>
        </tbody>
      </table>
      <Text style={{marginTop:100, marginBottom:5,}}>HTML Form</Text>
       <Text>Name:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5}} value={name} onChangeText={setName} />

      <Text>Email:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5}} value={email} onChangeText={setEmail} />

      <Text>Message:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5}} value={message} onChangeText={setMessage} multiline />

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{border: '2px solid #ccc', borderRadius: 5, width: 60, marginTop:5, paddingHorizontal: 5, }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '80%',
    marginLeft: '10%',
    marginTop: '2%',
    padding: 50,
    backgroundColor: 'white',
    border: '1px solid #171717',
    borderRadius: 5,
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: 20,
  },
  cell: {
    border: '2px solid black',
    padding: 8,
  },

});

export default Footer;