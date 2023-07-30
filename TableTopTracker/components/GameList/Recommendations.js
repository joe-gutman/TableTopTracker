import React from 'react';
import { View } from 'react-native';
import GamesList from './GamesList';

export default function Recommendations({ games }) {
  return (
    <View>
      <GamesList games={ games } />
    </View>
  );
}