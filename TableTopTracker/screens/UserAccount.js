import React from 'react';
import styles from '../components/UserAccount/styles'

import { StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';
import UserSettings from '../components/UserAccount/UserSettings.js';
import NavBar from '../components/NavBar/NavBar.js';

import EditNav from '../components/UserAccount/EditNav.js';

export default function UserAccount ({navigation, route}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    const { user, handleLogout } = route.params;

    return (
        <View>
            <ImageBackground
            source={require('../assets/Asset-Background-Wood.png')}
            style={styles.wood} >
            {/* <Text>This is {user.email}'s HomePage</Text> */}
            <UserSettings />
            <Button title="Log Out" onPress={handleLogout} />
            <NavBar navigation={navigation} user={user}/>
            </ImageBackground>
        </View>
    )
}