import React from 'react';
import { View } from 'react-native';
import GamesList from './GamesList';

const Recommendations = ({ games }) => (
  <View>
    <GamesList games={ games } />
  </View>
);

export default Recommendations;