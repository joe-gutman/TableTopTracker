
import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableHighlight, Pressable, Image } from 'react-native';

import styles from './navBarStyles.js';

// import home from '../assets/Asset-Collection/House.png';

export default function NavBar({navigation, user}) {
// export default function NavBar({navigation, user, gameWarden}) {
    if(!user) {
        throw new Error('User not defined in NavBar');
    }

    return (
      <View>
        <TouchableHighlight>
            <View style = {styles.navBarContainer}>
              <View style={styles.leftColumn}>
                <View style={styles.littleButton}>
                  <Pressable
                    title="Home"
                    onPress={() =>
                        navigation.navigate('Home', user={user})
                    }>home
                    {/* <Image source={require('../assets/Asset-Collection/House.png')} /> */}
                  </Pressable>
                </View>
              </View>
              <View style={styles.centerColumn}>
                <View styles={styles.centerTop}>
                  {gameWarden ?
                  (<Pressable
                    title="Game Warden"
                    style={styles.bigButton}
                    onPress={() =>
                      navigation.navigate('Game Warden', user={user})
                    }>game warden
                  </Pressable>):
                  (<Pressable
                    title="Search"
                    style={styles.bigButton}
                    onPress={() =>
                        navigation.navigate('Search', user={user})
                    }>search
                  </Pressable>)}
                </View>

                <View style={styles.centerMiddle}>
                  {/* notch image */}
                </View>
                <View style={styles.centerBottom}>

                </View>
              </View>
              <View style={styles.rightColumn}>
                <View style={styles.littleButton}>
                  <Pressable
                    title="User Account"
                    style={styles.littleButton}
                    onPress={() =>
                        navigation.navigate('User Account', user={user})
                    }>user account
                  </Pressable>
                </View>
              </View>
            </View>
        </TouchableHighlight>
      </View>
    )
}
