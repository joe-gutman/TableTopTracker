import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Pressable } from 'react-native';

import firebase from 'firebase/compat/app'; // Update the import path
import 'firebase/compat/auth'; // Import the authentication module with 'compat'
import NavBar from '../components/NavBar/NavBar.js';

import { fetchUser } from '../util/api.js';
import {useDispatch} from "react-redux";
import {handleSetUser} from "../state/app/actions";
import {handleReceiveCollections} from "../state/collections/actions"

import styles from './stylesheets/loginStyles.js';

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
    //hides top bar navigator
    React.useLayoutEffect(() => {
      navigation.setOptions({headerShown: false});
    }, [navigation]);

    const dispatch = useDispatch();
    const [email, setEmail] = useState('admin@tabletop.com');
    const [password, setPassword] = useState('tabletop123');
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
        const user = response.data;
        console.log('fetch user response', user);
        var liveData = user.userData
        var dataKeys = Object.keys(user);
        var collections = {};
        for (let k of dataKeys) {
          if (k !== 'userData') {
            collections[k] = user[k]
          }
        }
        console.log(collections);
        console.log(liveData);
        dispatch(handleReceiveCollections(collections))
        dispatch(handleSetUser(liveData));
        navigation.navigate('Home', { user: liveData, handleLogout: handleLogout });
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
    <View style={styles.parentContainer}>
        {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}
      <ImageBackground
          source={require('../assets/Asset-Background-Wood.png')}
          style={styles.wood}
      >

        <ImageBackground
            source={require('../assets/Asset-LandingPage-Scroll.png')}
            style={styles.scroll}
        >
            <Image
                source={require('../assets/Asset-Logo-Vertical.png')}
                style={styles.logoImage}
            />
            <Text style={styles.boardGameGeek}>Powered by Board Game Geek</Text>

            <View>
              <TextInput
                style={styles.textInputBox}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
              />
              <TextInput
                style={styles.textInputBox}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry
              />
              <Pressable
                style={styles.loginButton}
                title="Log in"
                onPress={handleLogin}>
                  <Text style={styles.loginButtonText}>Log in</Text>
                </Pressable>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
}
