import React from 'react';
import { View, FlatList } from 'react-native';
import PlaceholderCard from './PlaceholderCard';
import styles from './styles.js';

export default function GamesList({ games }) {
  return (
    <View style={ styles.list }>
      <FlatList
        data={ games }
        renderItem={ PlaceholderCard }
        keyExtractor={ ({ boardgameId }) => boardgameId.toString() }
      />
    </View>
  );
}