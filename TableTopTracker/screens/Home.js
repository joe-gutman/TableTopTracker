import { StyleSheet, Text, View, Button} from 'react-native';

export default function Home ({navigation}) {
    return (
        <View>
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
                    navigation.navigate('Login', {name: 'RandomUserAccount'})
                }
                />
        </View>
    )
}