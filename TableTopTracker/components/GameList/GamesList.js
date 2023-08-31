import React, { useEffect } from 'react';
import { View, Text, FlatList, Animated, Easing } from 'react-native';
import GameCard from './GameCard';
import styles from './styles';

/* (DIRECTIONS):
  1. handle appropriate filtering logic
  2. pass in list (state in parent component, i.e. screen)
*/
export default function GamesList({ handlePress, games, setListType, reshuffle }) {
  const rotateAnimValue = new Animated.Value(0);

  useEffect(() => {
    // animate rotation when list changes
    // console.log(`animation triggered, list to ${reshuffle}`)
    Animated.timing(rotateAnimValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true

    }).start(({finished}) => {
      rotateAnimValue.setValue(0);
      setListType(reshuffle);
    });
  }, [ reshuffle ]);

  const rotateInterpolation = rotateAnimValue
    .interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '180deg' ]
    });

  return (
    // <View style={ styles.gamesListContainer }>
    <View>
      {/* <Text style={ styles.header }>{ listType }</Text> */}

      <Animated.View
        style={{
          transform: [{ rotateX: rotateInterpolation }],
          backfaceVisibility: 'hidden'
        }}
      >
        <FlatList
          data={ games }
          renderItem={ ({ item }) => (
            <GameCard handlePress={() => handlePress(item)} { ...item } />
          )}
          keyExtractor={ ({id, bgg_id}) => id.toString()}
          style={ styles.gamesList }
        />
      </Animated.View>
    </View>
  );
}