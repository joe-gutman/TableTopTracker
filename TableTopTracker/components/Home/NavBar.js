
import React, {useState, useEffect} from 'react';
import styles from './styles'
import { StyleSheet, Button, View, TextInput, SafeAreaView } from 'react-native';

export default function NavBar({navigation}) {
    return (
        <View style = {styles.container}>
            <Button title="Home"
                onPress={() =>
                    navigation.navigate('')
                }>
    
            </Button>
            <Button title="Search"
                onPress={() =>
                    navigation.navigate('')
                }>
            </Button>
            <Button title="Get Started"
                onPress={() =>
                    navigation.navigate('')
                }>
            </Button>
        </View>
    )
    
}   