import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as ImagePicker from 'expo-image-picker';
=======

import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as ImagePicker from 'expo-image-picker';

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
export default function SignUp ({navigation}) {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [uid, setUid] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
<<<<<<< HEAD
  const handleSignUp = () => {
=======


  const handleSignUp = async () => {
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful registration
        let user = userCredential.user;
<<<<<<< HEAD
=======
        console.log(user);
        console.log(user.uid)
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
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
<<<<<<< HEAD
=======


>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
<<<<<<< HEAD
=======

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
    if (!result.cancelled) {
      setImageURL(result.uri);
      console.log(imageURL);
    } else {
      console.log('Image picker canceled.');
    }
  };
<<<<<<< HEAD
=======

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
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
<<<<<<< HEAD
=======


>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
            <Button title="Upload Profile Photo" onPress={handleImageUpload} />
              {imageURL && <Image source={{ uri: imageURL }} />}
            <Button
              title="Next"
<<<<<<< HEAD
              onPress={() => {
                handleSignUp();
                navigation.navigate('New User Preferences', {uid: uid, email: email, fullname: fullname, username: username, profilePhoto: imageURL })
=======
              onPress={ async () => {
                await handleSignUp();
                await navigation.navigate('New User Preferences', {uid: uid, email: email, fullname: fullname, username: username, profilePhoto: imageURL })
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
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