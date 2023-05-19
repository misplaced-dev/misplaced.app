import React, {useState} from 'react';
import { Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



const ClassStuff = () => {
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
        <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cellb}>Tech</Text>
        <Text style={styles.cellb}>Events</Text>
        <Text style={styles.cellb}>Plans</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>MERN Stack</Text>
        <Text style={styles.cell}>Started Spring Break to self-teach React Native</Text>
        <Text style={styles.cell}>Pass code audit by Towson U IT dept.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Javascript</Text>
        <Text style={styles.cell}>Went to final round in competition and lost</Text>
        <Text style={styles.cell}>Get Misplaced to other universities</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Cloudinary</Text>
        <Text style={styles.cell}>Had first meeting with Towson VP to establish Misplaced at Towson</Text>
        <Text style={styles.cell}>Get a good job at a big tech company and forget about this (jk)</Text>
      </View>
    </View>
      <Text style={{marginTop:100, marginBottom:5,}}>HTML Form</Text>
       <Text>Name:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5, padding:3}} value={name} onChangeText={setName} />

      <Text>Email:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5, padding:3}} value={email} onChangeText={setEmail} />

      <Text>Message:</Text>
      <TextInput style={{border: '3px solid #ccc', borderRadius: 5, padding:3}} value={message} onChangeText={setMessage} multiline />

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{border: '2px solid #ccc', borderRadius: 5, width: 60, marginTop:5, paddingHorizontal: 5, }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


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
    display: 'flex',
    flexDirection: 'column',
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  cell: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: '33.335%',
    textAlign: 'center',
  },
  cellb: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: '33.335%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});

export default ClassStuff;