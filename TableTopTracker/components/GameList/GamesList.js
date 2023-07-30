import React from 'react';
import { View, FlatList } from 'react-native';
import PlaceholderCard from './PlaceholderCard';

export default function GamesList({ games }) {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={ games }
        renderItem={ PlaceholderCard }
        keyExtractor={ ({ boardgameId }) => boardgameId.toString() }
      />
    </View>
  );
}