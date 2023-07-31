import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AccountDetails ({navigation, route}) {
    const { user, handleLogout } = route.params;

    return (
        <View>
        <Text>
            Profile Image HERE <br></br>
            Name <br></br>
            Username <br></br>
            Age <br></br>
            Preffered Play Style <br></br>
            Favorite Game <br></br>
            LIST GAME CATEGORIES HERE <br></br>
            Change Account Details Button Here <br></br>
            <Button title="Log Out" onPress={handleLogout} />
            </Text>
        </View>
    )
}