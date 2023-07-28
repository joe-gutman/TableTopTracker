
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Home ({navigation}) {
    return (
        <View>
            <Text>
                hello laddies
            </Text>
            <Button
                title="Go to Game Page"
                onPress={() =>
                    navigation.navigate('Login', {name: 'TableTop'})
                }
                />
        </View>
    )
}