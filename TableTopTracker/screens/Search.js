import React from 'react';
import { View, Text, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';
import { useState } from 'react';

export default function Search({navigation, route}) {
  let { user } = route.params;
  const [ gameWarden, setGameWarden ] = useState(true);
  return (
      <View>
          <Text>"Search"</Text>
          <Button
          title="Search"
          onPress={() =>
              navigation.navigate('Search Results', {user: user})
          } />
          <NavBar navigation={navigation} user={user} gameWarden={gameWarden} />

      </View>
  )
}