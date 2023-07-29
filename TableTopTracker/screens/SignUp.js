import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SignUp ({navigation, route}) {
  const [email, onChangeEmail] = React.useState('');
  const [fullName, onChangeName] = React.useState('');
  const [newUsername, onChangeNewUsername] = React.useState('');
  const [newPassword, onChangeNewPassword] = React.useState('');

    return (
        <View>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <TextInput
              onChangeText={onChangeName}
              value={fullName}
              placeholder="Full Name"
            />
            <TextInput
              onChangeText={onChangeNewUsername}
              value={newUsername}
              placeholder="Username"
            />
            <TextInput
              onChangeText={onChangeNewPassword}
              value={newPassword}
              placeholder="Password"
            />
        </View>
    )
}