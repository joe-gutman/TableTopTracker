import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import Settings from '../components/Account/viewSettings.js'

export default function AccountDetails ({navigation, route}) {

    return (
        <View>
            <Settings />
        </View>
    )
}