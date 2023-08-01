import React, {useState} from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home ({navigation, route}) {
  const { user, handleLogout } = route.params;


    return (
        <View>
            <Text> Home Page Placeholder </Text>
            <Button
                title="User Account"
                onPress={() =>
                    navigation.navigate('User Account', { user, handleLogout })
                }
                />
        </View>
    )
}