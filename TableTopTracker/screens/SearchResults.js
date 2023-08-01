import React from 'react';

import NavBar from '../components/NavBar/NavBar.js';

export default function SearchResults({ navigation, route }) {
  const { user } = route.params;
  return (
      <View>
          <Text>"SearchResults"</Text>
          <NavBar navigation={navigation} user={user}/>
      </View>
  )
}