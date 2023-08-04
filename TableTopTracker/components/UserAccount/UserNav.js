
import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';


export default function NavBar({navigation, user, gameWarden}) {
    if(!user) {
        throw new Error('User not defined in NavBar');
    }

    return (
      <>
        <TouchableHighlight>
            <View style = {styles.navBarContainer}>
                <Button title="Home"
                    onPress={() =>
                        navigation.navigate('Home', user={user})
                    }>
                </Button>
                {gameWarden ?
                (<Button title="Game Warden"
                onPress={() =>
                    navigation.navigate('Game Warden', user={user})
                }>
                </Button>):
                (<Button title="Search"
                    onPress={() =>
                        navigation.navigate('Search', user={user})
                    }>
                </Button>)}
                <Button title="User Account"
                    onPress={() =>
                        navigation.navigate('User Account', user={user})
                    }>
                </Button>
            </View>
        </TouchableHighlight>
      </>
    )
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-evenly",
    zIndex: "999",
    width: "100%"
  },
  button: {
    backgroundColor: '#ECE4B7',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  }
})