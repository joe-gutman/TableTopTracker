import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styles from './stylesheets/landingStyles.js';

import NavBar from '../components/NavBar/NavBar.js';

export default function Landing ({navigation}) {
    return (
        <View style={styles.parentContainer}>
            {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}

            <View style={styles.branding}>
              <View style={styles.logo}>
                <Image
                  // default image for user-created collections is life person icon
                  source={require('../assets/Asset-Logo-Horizontal.png')}
                  style={{
                  height: 120,
                  width: 290,
                }}/>
              </View>
              <Text style={styles.greenWords}>Powered by Board Game Geek</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Pressable style={styles.bigGreenButton}
                title="Get Started"
                onPress={() =>
                    navigation.navigate('Sign Up')
                }>
                  <Text style={styles.bigGreenButtonText}>Get Started</Text>
              </Pressable>
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