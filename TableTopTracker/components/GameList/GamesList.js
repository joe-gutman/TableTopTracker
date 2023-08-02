import React, { useEffect } from 'react';
import { View, Text, FlatList, Animated, Easing } from 'react-native';
import GameCard from './GameCard';
import styles from './styles';

/* (DIRECTIONS):
  1. handle appropriate filtering logic
  2. pass in list (state in parent component, i.e. screen)
*/
export default function GamesList({ games, listType }) {
  const rotateAnimValue = new Animated.Value(0);

  useEffect(() => {
    // animate rotation when list changes
    Animated.timing(rotateAnimValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true

    }).start(() => {
      rotateAnimValue.setValue(0);
    });
  }, [ listType ]);

  const rotateInterpolation = rotateAnimValue
    .interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '180deg' ]
    });

  return (
    <View style={ styles.list }>
      <Text style={ styles.header }>{ listType }</Text>

      <Animated.View
        style={{
          transform: [{ rotateX: rotateInterpolation }],
          backfaceVisibility: 'hidden'
        }}
      >
        <FlatList
          data={ games }
          renderItem={ ({ item }) => (
            <GameCard { ...item } />
          ) }
          keyExtractor={ ({ boardgameId }) => boardgameId.toString() }
          style={ styles.list }
        />
      </Animated.View>
    </View>
  );
}