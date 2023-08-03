import React from 'react';

import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';
import styles from './stylesheets/SignUpStyles.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as ImagePicker from 'expo-image-picker';

export default function SignUp ({navigation}) {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [uid, setUid] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');


  const handleSignUp = async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful registration
        let user = userCredential.user;
        console.log(user);
        console.log(user.uid)
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


  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImageURL(result.uri);
      console.log(imageURL);
    } else {
      console.log('Image picker canceled.');
    }
  };



  const checkUserInput = async () => {
    if (!email.trim()) {
      alert('Please Enter an email');
      return;
    }

    if (!fullname.trim()) {
      alert('Please enter your full name');
      return;
    }

    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    if (!password.trim() || password.trim().length < 6) {
      alert('Please enter a password of at least 6 characters');
      return;
    }

    if (!password.trim()) {
      alert('Please enter a password');
      return;
    }

    if(!passwordCheck.trim()) {
      alert('Please re-enter password for confirmation');
      return;
    }

    if (passwordCheck !== password) {
      alert('Please re-enter both passwords to make sure they match')
      return;
    }

    try {
      await handleSignUp();
      await navigation.navigate('New User Preferences', {uid: uid, email: email, fullname: fullname, username: username, profilePhoto: imageURL })
    } catch (error) {
      console.error('Error passing new user info into new user preferences', error);
    }
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
            <TextInput
              onChangeText={setPasswordCheck}
              value={passwordCheck}
              placeholder="Re-enter your password"
              secureTextEntry
            />
            <Button title="Upload Profile Photo" onPress={handleImageUpload} />
              {imageURL && <Image source={{ uri: imageURL }} />}
            <Button
              title="Next"
              onPress={ checkUserInput
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