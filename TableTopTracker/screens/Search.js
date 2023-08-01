import React from 'react';
import {View, Text, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

export default function Search({navigation, route}) {
  const { user } = route.params;
  return (
      <View>
          <Text>"Search"</Text>
          <Button
          title="Search"
          onPress={() =>
              navigation.navigate('Search Results', user={user})
          } />
          <NavBar navigation={navigation} user={user}/>

      </View>
  )
}