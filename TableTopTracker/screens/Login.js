import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login ({navigation, route}) {

    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    return (
        <View>
            <Text>
            This is {route.params.name}'s profile
            </Text>

            <TextInput
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
            />
            <TextInput
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
            />

        </View>
    )
}