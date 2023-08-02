import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import firebase from 'firebase/compat/app'; // Update the import path
import 'firebase/compat/auth'; // Import the authentication module with 'compat'

import NavBar from '../components/NavBar/NavBar.js';

import axios from 'axios';
import { fetchUser } from '../util/api.js';

const dummydata = {
    "uid":"yElHRF2wa2NDBQ9myvTXVEd60Tt2",
    "email":"admin@tabletop.com",
    "fullname": "Samantha Johnson",
    "username": "SamPlayzGames",
    "age": 28,
    "preferred_playstyle": "Strategic and Competitive",
    "favorite_mythical_creature": "Dragon",
    "favorite_board_game": "Catan (Settlers of Catan)",
    "favorite_category": "Eurogames"
};

export default function Login ({navigation, route}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Handle successful
        let user = userCredential.user;
        console.log('USER', user)
        console.log('Logged in user:', user.email);
        return fetchUser(user);
    })
    .then(function (response) {
        console.log(response)
        const user = response;
         // Navigate to the desired screen after successful login
         // LOGIN IS USING DUMMY DATA
        navigation.navigate('Home', { user: dummydata, handleLogout: handleLogout });
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
