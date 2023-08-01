import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import UserSettings from '../components/Account/UserSettings.js'

export default function UserAccounts ({navigation, route}) {
    const { user, handleLogout } = route.params;
    return (
        <View>
            <UserSettings />
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    )
}