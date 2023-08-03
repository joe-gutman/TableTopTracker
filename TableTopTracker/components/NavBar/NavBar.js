
import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';

import styles from './styles.js';

export default function NavBar({navigation, user, gameWarden}) {
    if(!user) {
        throw new Error('User not defined in NavBar');
    }

    return (
      <View>
        <TouchableHighlight>
            <View style = {styles.navBarContainer}>
              <View style={styles.leftColumn}>
                <View style={styles.littleButton}>
                  <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate('Home', user={user})
                    }>
                  </Button>
                </View>
              </View>
              <View style={styles.centerColumn}>
                <View styles={styles.centerTop}>
                  {gameWarden ?
                  (<Button
                    title="Game Warden"
                    style={styles.bigButton}
                    onPress={() =>
                      navigation.navigate('Game Warden', user={user})
                    }>
                  </Button>):
                  (<Button
                    title="Search"
                    style={styles.bigButton}
                    onPress={() =>
                        navigation.navigate('Search', user={user})
                    }>
                  </Button>)}
                </View>

                <View style={styles.centerMiddle}>
                  {/* notch image */}
                </View>
                <View style={styles.centerBottom}>

                </View>
              </View>
              <View style={styles.rightColumn}>
                <View style={styles.littleButton}>
                  <Button
                    title="User Account"
                    style={styles.littleButton}
                    onPress={() =>
                        navigation.navigate('User Account', user={user})
                    }>
                  </Button>
                </View>
              </View>
            </View>
        </TouchableHighlight>
      </View>
    )
}
