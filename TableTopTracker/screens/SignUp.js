import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function SignUp ({navigation}) {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [uid, setUid] = React.useState('');

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful registration
        let user = userCredential.user;
        console.log(user);
        setUid(user.uid);
        console.log('Newly registered user:', user.email);
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle registration errors
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('Email address is already in use.');
        } else if (error.code === 'auth/invalid-email') {
          setErrorMessage('Invalid email address.');
        } else if (error.code === 'auth/weak-password') {
          setErrorMessage('Password should be at least 6 characters.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };
    return (
        <View>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
            />
            <TextInput
              onChangeText={setFullname}
              value={fullname}
              placeholder="Full Name"
            />
            <TextInput
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry
            />
            <Text> Photo Upload Section Here </Text>
            <Button
              title="Next"
              onPress={() => {
                handleSignUp();
                navigation.navigate('New User Preferences', {uid: uid, email: email, fullname: fullname, username: username })
              }
              }
            />

            <Text> Have an Account? </Text>
            <Button
              title="Log in"
              onPress={() => {
                  navigation.navigate('Login', {name: username});
              }}
            />

        </View>
    )
}