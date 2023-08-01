
import React, {useState, useEffect} from 'react';
import styles from './styles'
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';

export default function NavBar({navigation, user}) {
    if(!user) {
        throw new Error('User not defined in NavBar');
    }

    return (
        <TouchableHighlight>
            <View style = {styles.container}>
                <Button title="Home"
                    onPress={() =>
                        navigation.navigate('Home')
                    }>

                </Button>
                <Button title="Search"
                    onPress={() =>
                        navigation.navigate('Search', user={user})
                    }>
                </Button>
                <Button title="User Account"
                    onPress={() =>
                        navigation.navigate('User Account', user={user})
                    }>
                </Button>
            </View>
        </TouchableHighlight>
    )

}