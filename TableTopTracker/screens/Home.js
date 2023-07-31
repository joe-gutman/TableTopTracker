import React, {useState} from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home ({navigation, route}) {
  const { user, handleLogout } = route.params;


    return (
        <View>
            <Text> Home Page Placeholder </Text>
            <Button
                title="Account Details"
                onPress={() =>
                    navigation.navigate('Account Details', { user, handleLogout })
                }
                />
        </View>
    )
}