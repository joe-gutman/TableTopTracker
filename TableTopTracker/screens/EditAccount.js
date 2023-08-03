import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ChangeSettings from '../components/UserAccount/ChangeSettings.js';

import NavBar from '../components/NavBar/NavBar.js';

export default function EditAccount ({navigation, route}) {
    const { user, handleLogout } = route.params;
    return (
        <View>
            <Text>This is {user.email}'s HomePage</Text>
                <ChangeSettings />
            <Button title="Log Out" onPress={handleLogout} />
            <NavBar navigation={navigation} user={user}/>
        </View>
    )
}