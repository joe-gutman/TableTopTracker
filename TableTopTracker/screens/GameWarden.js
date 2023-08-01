import React from 'react';

import NavBar from '../components/NavBar/NavBar.js';
export default function GameWarden({navigation}) {
  return (
      <View>
          <Text>"Game Warden"</Text>
          <NavBar navigation={navigation} username={username}/>
      </View>
  )
}