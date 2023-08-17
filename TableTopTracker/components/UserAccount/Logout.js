import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TouchableHighlight } from 'react-native';


export default function Logout({navigation, user}) {
    if(!user) {
        throw new Error('User not defined in TopNav');
    }

    return (
      <>
        <TouchableHighlight>
            <View>
              {console.log("Logout button is being returned!")}
                <Button title="Log Out"
                    onPress={() =>
                        navigation.navigate('Login', user={user})
                    }>
                </Button>
            </View>
        </TouchableHighlight>
      </>
    )
}

const styles = StyleSheet.create({
  navBarContainer: {
    display: 'flex',
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  }
})