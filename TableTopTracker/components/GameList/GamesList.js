import React, { useEffect } from 'react';
import { View, Text, FlatList, Animated, Easing } from 'react-native';
import PlaceholderCard from './PlaceholderCard';
import styles from './styles';

export default function GamesList({ games, selectedList }) {
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
  }, [ selectedList ]);

  const rotateInterpolation = rotateAnimValue
    .interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '180deg' ]
    });

  const filteredGames = games
    .filter((game) => {
      // TODO: implement filtering logic
      return true; // placeholder
    });

  return (
    <View style={ styles.list }>
      <Text style={ styles.header }>{ selectedList }</Text>

      <Animated.View
        style={{
          transform: [{ rotateX: rotateInterpolation }],
          backfaceVisibility: 'hidden' // prevent flickering during rotation
        }}
      >
        <FlatList
          data={ filteredGames }
          renderItem={ (game) => (
            <PlaceholderCard { ...game } />
          ) }
          keyExtractor={ ({ boardgameId }) => boardgameId.toString() }
        />
      </Animated.View>
    </View>
  );
}