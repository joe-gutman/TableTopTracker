import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login ({navigation, route}) {

    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    return (
        <View>
            <Text>
            This is {route.params.name}'s profile
            </Text>

            <TextInput
                onChangeUsername={onChangeUsername}
                value={username}
                placeholder="Username"
            />
            <TextInput
                onChangePassword={onChangePassword}
                value={password}
                placeholder="Password"
            />

            <Button
                title="Log in"
                onPress={() =>
                    navigation.navigate('Account Details')
                }
            />
        </View>
    )
}