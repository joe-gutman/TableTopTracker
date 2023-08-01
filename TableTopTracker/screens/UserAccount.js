import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import UserSettings from '../components/UserAccount/UserSettings.js';

import NavBar from '../components/NavBar/NavBar.js';

export default function UserAccount ({navigation, route}) {
    const { user, handleLogout } = route.params;
    return (
        <View>
            <Text>This is {user.email}'s HomePage</Text>
            <UserSettings />
            <Button title="Log Out" onPress={handleLogout} />
            <NavBar navigation={navigation} user={user}/>
        </View>
    )
}