import React from 'react';

import NavBar from '../components/NavBar/NavBar.js';
import { View, Text } from 'react-native';

export default function SearchResults({ navigation, route }) {
  const { user } = route.params;
  return (
      <View>
          <Text>"SearchResults"</Text>
          <NavBar navigation={navigation} user={user}/>
      </View>
  )
}