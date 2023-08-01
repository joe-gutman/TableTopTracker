import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import firebase from 'firebase/compat/app'; // Update the import path
import 'firebase/compat/auth'; // Import the authentication module with 'compat'


export default function Login ({navigation, route}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log('USER', user)
        console.log('Logged in user:', user.email);
        // Navigate to the desired screen after successful login
        navigation.navigate('Home', {user, handleLogout});
    })
    .catch((error) => {
        // Handle login errors
        if (error.code === 'auth/user-not-found') {
            setErrorMessage('User does not exist');
            console.log(error.code);
        } else if (error.code === 'auth/wrong-password') {
            setErrorMessage('Incorrect password');
            console.log(error.code);
        } else {
            setErrorMessage('An error occurred. Please try again later.');
            console.log(error.code);
        }
    });
    };


    const handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
    // Handle successful logout
    console.log('User logged out successfully.');
    // Add any additional logic after the user is logged out
    navigation.navigate('Landing');
    })
    .catch((error) => {
    // Handle logout errors
    console.log('Error logging out:', error);
    });
    };

    return (
        <View>
        <Text>This is {route.params.name}'s profile</Text>
        <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        />
        <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        />
        <Button title="Log in" onPress={handleLogin} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    )
}
