import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TouchableHighlight } from 'react-native';


export default function Save({navigation, user}) {
    if(!user) {
        throw new Error('User not defined in TopNav');
    }

    return (
      <>
        <TouchableHighlight>
            <View>
                {console.log("save button is being returned!")}
                <Button title="Save"
                    onPress={() =>
                        navigation.navigate('UserAccount', user={user})
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  }
})