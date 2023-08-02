import React from 'react';
import { View, Text, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';
import { useState } from 'react';

import Slider from '../components/Sliders/Slider.js';

export default function Search({navigation, route}) {
  let { user } = route.params;
  const [ gameWarden, setGameWarden ] = useState(true);

  const searchWrapper = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  }

  return (
      <View style={searchWrapper}>
          <Text>"Search"</Text>
          <input id="searchInput" />
          <Slider type={'double'} max={5}/>
          <Slider type={'single'} max={5}/>
          <Button
          title="Search"
          onPress={() =>
              navigation.navigate('Search Results', {user: user})
          } />
          <NavBar navigation={navigation} user={user} gameWarden={gameWarden} />

      </View>
  )
}