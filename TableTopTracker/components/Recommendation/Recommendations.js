import React from 'react';
import { View, Text } from 'react-native';
import GamesList from '../GameList/GamesList';
import styles from '../GameList/styles';

// displays recommended list
export default function Recommendations({ games }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>
        Recommendations
      </Text>

      <GamesList games={ games } />
    </View>
  );
}