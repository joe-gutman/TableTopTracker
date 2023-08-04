import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image, ImageBackground} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styles from './stylesheets/landingStyles.js';
import NavBar from '../components/NavBar/NavBar.js';
export default function Landing ({navigation}) {
    //hides top bar navigator
    React.useLayoutEffect(() => {
      navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <View style={styles.parentContainer}>
            {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}
          <ImageBackground
              source={require('../assets/Asset-Background-Wood.png')}
              style={styles.wood}
          >
            <ImageBackground
                source={require('../assets/Asset-LandingPage-Scroll.png')}
                style={styles.scroll}
            >
                <Image
                    source={require('../assets/Asset-Logo-Vertical.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.boardGameGeek}>Powered by Board Game Geek</Text>
                <Pressable style={styles.registerButton}
                title="Get Started"
                onPress={() =>
                  navigation.navigate('Sign Up')
                }>
                  <Text style={styles.registerButtonText}>Get Started</Text>
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
                </View>
            </ImageBackground>
          </ImageBackground>
        </View>
    )
}