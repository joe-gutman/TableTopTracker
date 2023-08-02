import React from 'react';
import { View, Text } from 'react-native';
import GamesList from './GamesList';
import styles from './styles';

// displays personal collection
export default function MyGames({ games }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>
        My Games
      </Text>

      <GamesList games={ games } style={styles.listContainer}/>
    </View>
  );
}