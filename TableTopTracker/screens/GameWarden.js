import React from 'react';

import NavBar from '../components/NavBar/NavBar.js';

import { View, Text } from 'react-native';

export default function GameWarden({navigation, route}) {

  let {user} = route.params;

  return (
      <View>
          <Text>"Game Warden"</Text>
          <NavBar navigation={navigation} user={user}/>
      </View>
  )
}