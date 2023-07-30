import React from 'react';
import { View } from 'react-native';
import GamesList from './GamesList';

// displays personal collection
export default function Personal({ games }) {
  return (
    <View>
      <GamesList games={ games } />
    </View>
  );
}