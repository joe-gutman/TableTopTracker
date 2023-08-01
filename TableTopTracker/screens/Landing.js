import { StyleSheet, Text, View, Button} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import NavBar from '../components/NavBar/NavBar.js';

export default function Landing ({navigation}) {
    return (
        <View>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
            <Text>
                Powered by Board Game Geek
            </Text>
            <Button
                title="Get Started"
                onPress={() =>
                    navigation.navigate('Sign Up')
                }
                />
            <Text> Have an Account? </Text>
            <Button
                title="Log in"
                onPress={() =>
                    navigation.navigate('Login')
                }
                />

        </View>
    )
}