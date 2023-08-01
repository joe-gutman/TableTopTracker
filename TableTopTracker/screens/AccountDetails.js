import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AccountDetails ({navigation, route}) {
    const { user, handleLogout } = route.params;

    return (
        <View>
            <Settings />
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    )
}