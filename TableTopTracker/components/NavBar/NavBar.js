
import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, Image } from 'react-native';

import styles from './navBarStyles.js';

const icons = {
  'MonopolyHouse': require('../../assets/Asset-NavBar-MonopolyHouse.png'),
  'Notch': require('../../assets/Asset-NavBar-Notch.png'),
  'Search': require('../../assets/Asset-NavBar-MagnifyingGlass.png'),
  'GameWarden': require('../../assets/Asset-GameWarden-Mascot.png'),
  'UserAccount': require('../../assets/Asset-NavBar-LifePerson.png')
};

export default function NavBar({navigation, user, gameWarden}) {
// export default function NavBar({navigation, user, gameWarden}) {
    if(!user) {
        throw new Error('User not defined in NavBar');
    }

    return (
      <View>
        <TouchableOpacity>
          <View style={styles.floatingButtonContainer}>
            {gameWarden ?
            (<Pressable
              title="Game Warden"
              style={styles.bigButton}
              onPress={() =>
                navigation.navigate('Game Warden', user={user})
              }>
                <Image source={icons['GameWarden']} style={{
                  height: 50,
                  width: 50,
                }}/>
            </Pressable>):
            (<Pressable
              title="Search"
              style={styles.bigButtonContainer}
              onPress={() =>
                  navigation.navigate('Search', user={user})
              }><Image source={icons['Search']} style={styles.bigButton
              }/>
            </Pressable>)}
          </View>
          <View style = {styles.bottomRowContainer}>
            <View style={styles.leftColumn}>
              <Pressable
                title="Home"
                onPress={() =>
                    navigation.navigate('Home', user={user})
                }>
                  <Image source={icons['MonopolyHouse']} style={styles.littleButton}/>
              </Pressable>
            </View>
            <View style={styles.centerColumn}>
              <View style={styles.centerTop}>
                <Image source={icons['Notch']} style={styles.notch}/>
              </View>
              <View style={styles.centerBottom}></View>
            </View>
            <View style={styles.rightColumn}>
              <Pressable
                title="User Account"
                style={styles.littleButton}
                onPress={() =>
                    navigation.navigate('User Account', user={user})
                }>
                  <Image source={icons['UserAccount']} style={{
                    height: 50,
                    width: 50,
                  }}/>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
}
