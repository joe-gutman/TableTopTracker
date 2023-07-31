
import { StyleSheet, Text, View } from 'react-native';

export default function Login ({navigation, route}) {
    return (
        <View>
            <Text>
            This is {route.params.name}'s profile
            </Text>
        </View>
    );
};