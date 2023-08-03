import React, {useRef, useState} from 'react';
import {Animated, PanResponder, Pressable, StyleSheet, View} from 'react-native';
import { Card, Text, BottomNavigation } from 'react-native-paper';
import {handleOpenModal} from "../../state/modal/actions";
import {useDispatch} from "react-redux";


const SwipeableDetails = () => {
  const dispatch = useDispatch();
  const pan = useRef(new Animated.ValueXY()).current;
  const [modal, setModal] = useState(false);
  const [tilePosition, setTilePosition] = useState(0);
  const [firstRendered, setFirstRendered] = useState(true);

  if (firstRendered) {
    setFirstRendered(false);
    setTilePosition(1);
    setTimeout(
      () => {
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: -350}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: -350})
        });
      }, 500)
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    // onPanResponderGrant: (e, gestureState) => {
    //   pan.setOffset({x: 0, y: -400});
    //   pan.setValue({x: 0, y: 0});
    // },
    onPanResponderMove: Animated.event([
      null,
      {
        // dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: (e, gestureState) => {
      if ((pan.y._value < -200 || gestureState.vy < 0) && (tilePosition === 0)) {
        setTilePosition(1);
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: -350}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: -350})
        });
      }
      else {
        setTilePosition(0);
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: 0- pan.y._offset}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: 0})
        });
      }
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.tile]}
      >
          <Text style={styles.titleText}>{dummyGame.name}</Text>
          <View style={styles.table}>
            <View style={styles.column}>
              <Text>{dummyGame.category.join(', ')}</Text>
              <Text>{(dummyGame.minPlayTime===dummyGame.maxPlayTime) ?
              (dummyGame.minPlayTime) :
              `${dummyGame.minPlayTime} - ${dummyGame.maxPlayTime}`} minutes
              </Text>
              <Text>Released: {dummyGame.year}</Text>
            </View>
            <View style={styles.column}>
              <Text>{
                // render player number or number range
                (dummyGame.minPlayers===dummyGame.maxPlayers)
                ? dummyGame.minPlayers
                : `${dummyGame.minPlayers} - ${dummyGame.maxPlayers}`}
                {((dummyGame.minPlayers===dummyGame.maxPlayers) && (dummyGame.minPlayers===1))
                  ? ` player`
                  : ` players`
                } </Text>
              <Text>Recommended Age: {dummyGame.age}</Text>
              <Text>Complexity:</Text>
            </View>
          </View>
          <Text>{dummyGame.description}</Text>

          <Pressable onPress={() =>
            dispatch(handleOpenModal('ADD_TO_COLLECTION', {game: dummyGame}))}
          >
            <Text>Add To Collection</Text>
          </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:  '1.5em',
  },
  tile: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    borderWidth: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FBF5E7',
    borderColor: '#FBF5E7',
    padding: 20,
    overflowY: 'hidden',
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
    paddingBottom: 10,
  },
  column: {
    flex: 1,
  },
  titleText: {
    fontSize: '1.5em',
    paddingBottom: 20,
  }
});

const dummyGame = {
  complexity: 4.0,
  gameID: 675,
  year: 1977,
  minPlayers: 1,
  maxPlayers: 1,
  playTime: 45,
  minPlayTime: 45,
  maxPlayTime: 45,
  age: 12,
  name: "4th Dimension",
  secondaryName: "Fourth Dimension",
  description: "4th Dimension is a very spacey-looking game with a small circular board divided into sectors each track of which has twice as many spaces as the one closer to the center. Each player get 6 warriors, 3 rangers, 2 guardians, and one time lord. Guardians can capture warriors and rangers; rangers can capture warriors; the time lord can capture rangers and guardians; but the lowly warriors are the only ones who can capture the time lord and win the game. Captures are made by moving next to rather than on top of enemy pieces. Each piece can move only one space at a time but they can also warp by leaving the board and leaving a 4-D marker behind. The piece can then stay in the warp zone for up to three turns or warp back onto the board up to two spaces away from the 4-D marker. This game has an inconveniently small gameboard and plastic pieces that look like little futuristic chairs. \nThe game was first published in Games &amp; Puzzles magazine. The designers produced it as a standalone game later the same year, and it was later licensed by TSR.",
  thumbnail: "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__thumb/img/6AUVALlhQ_dtP04JEAJXG1gQKhY=/fit-in/200x150/filters:strip_icc()/pic582574.jpg",
  image: "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__original/img/29VmqkcRWoq_WS9uGtftdf6teyU=/0x0/filters:format(jpeg)/pic582574.jpg",
  category: ["Abstract Category", "Science Fiction"]
}

export default SwipeableDetails;