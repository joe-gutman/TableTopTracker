import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styles from './stylesheets/landingStyles.js';

import NavBar from '../components/NavBar/NavBar.js';

export default function Landing ({navigation}) {
    return (
        <View style={styles.parentContainer}>
            {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}

            <View style={styles.branding}>
              <View style={styles.logo}>
                <Text>[pretend i'm a logo]</Text>
              </View>
              <Text style={styles.greenWords}>Powered by Board Game Geek</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Button style={styles.bigGreenButton}
                title="Get Started"
                onPress={() =>
                    navigation.navigate('Sign Up')
                }
                />
              <View style={styles.loginContainer}>
                <Text style={styles.orangeWords}> Have an Account? </Text>
                <Pressable
                  title="Log in"
                  onPress={() =>
                        navigation.navigate('Login')
                  }>
                  <Text style={styles.greenWords}> Log in</Text>
                </Pressable>
                {/* <Button
                    title="Log in"
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                /> */}
                </View>
              </View>

        </View>
    )
}