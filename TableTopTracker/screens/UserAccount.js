import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import UserSettings from '../components/UserAccount/UserSettings.js';

import EditNav from '../components/UserAccount/EditNav.js';

export default function UserAccount ({navigation, route}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    const { user, handleLogout } = route.params;

    return (
        <View>
                <UserSettings user = {user} navigation = {navigation}/>
            {/* <Button title="Log Out" onPress={handleLogout} /> */}
            <EditNav navigation={navigation} user={user}/>
        </View>
    )
}