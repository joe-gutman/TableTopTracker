import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login ({navigation, route}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <View>
            <Text>
            This is {route.params.name}'s profile
            </Text>

            <TextInput
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username"
            />
            <TextInput
                onChangeText={text => setPassword(text)}
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
