import React from 'react';
import { View } from 'react-native';
import GamesList from './GamesList';

const Personal = ({ games }) => (
  <View>
    <GamesList games={ games } />
  </View>
);

export default Personal;