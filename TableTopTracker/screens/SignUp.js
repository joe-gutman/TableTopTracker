import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

export default function SignUp ({navigation, username}) {
  const [email, onChangeEmail] = React.useState('');
  const [fullName, onChangeName] = React.useState('');
  const [newUsername, onChangeNewUsername] = React.useState('');
  const [newPassword, onChangeNewPassword] = React.useState('');

    return (
        <View>
            <TextInput
              onChangeEmail={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <TextInput
              onChangeName={onChangeName}
              value={fullName}
              placeholder="Full Name"
            />
            <TextInput
              onChangeNewUsername={onChangeNewUsername}
              value={newUsername}
              placeholder="Username"
            />
            <TextInput
              onChangeNewPassword={onChangeNewPassword}
              value={newPassword}
              placeholder="Password"
            />
            <Text> Photo Upload Section Here </Text>
            <Button
              title="Next"
              onPress={() =>
                  navigation.navigate('New User Preferences')
              }
            />

            <Text> Have an Account? </Text>
            <Button
              title="Log in"
              onPress={() =>
                  navigation.navigate('Login', {name: username})
              }
            />

        </View>
    )
}