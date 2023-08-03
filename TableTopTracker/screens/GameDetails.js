//change name of file to whatever you want :D
import { useRef, useState } from 'react';
import { StyleSheet, Image, ImageBackground, View, TouchableOpacity, PanResponder, Animated, ScrollView } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import { Card, Text, BottomNavigation } from 'react-native-paper';
import SwipeableDetails from '../components/GameDetailsData/SwipeableDetails.js';

// import react native paper
// Component is currently rendered to bottom of App main page

// figure out how props are gonna be passed to this component
// Add screen for game details
// Add pressHandlers to game tiles

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
  description: "4th Dimension is a very spacey-looking game with a small circular board divided into sectors each track of which has twice as many spaces as the one closer to the center. Each player get 6 warriors, 3 rangers, 2 guardians, and one time lord. Guardians can capture warriors and rangers; rangers can capture warriors; the time lord can capture rangers and guardians; but the lowly warriors are the only ones who can capture the time lord and win the game. Captures are made by moving next to rather than on top of enemy pieces. Each piece can move only one space at a time but they can also &quot;warp&quot; by leaving the board and leaving a 4-D marker behind. The piece can then stay in the warp zone for up to three turns or warp back onto the board up to two spaces away from the 4-D marker. This game has an inconveniently small gameboard and plastic pieces that look like little futuristic chairs. \nThe game was first published in Games &amp; Puzzles magazine. The designers produced it as a standalone game later the same year, and it was later licensed by TSR.",
  thumbnail: "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__thumb/img/6AUVALlhQ_dtP04JEAJXG1gQKhY=/fit-in/200x150/filters:strip_icc()/pic582574.jpg",
  image: "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__original/img/29VmqkcRWoq_WS9uGtftdf6teyU=/0x0/filters:format(jpeg)/pic582574.jpg",
  category: ["Abstract Category", "Science Fiction"]
}

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  descriptionCard: {
    position: 'absolute',
    bottom: '0',
    borderWidth: 20,
    borderRadius: 20,
    backgroundColor: '#FBF5E7',
    borderColor: '#FBF5E7',
  },
  imageCard: {
    height: 400,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 8,
    transform: 'rotate(2deg)',

  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px'
  },
  column: {
    flex: 1,
  }
});

// const pan = useRef(new Animated.ValueXY()).current;
// const panResponder = useRef(
//   PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
//     onPanResponderRelease: () => {
//       pan.extractOffset();
//     },
//   })
// ).current;

export default function GameDetails ({navigation, route}) {
  const { user } = route.params;

  return (
    <View style={styles.parentContainer}>

      {/* wood background */}
      <ImageBackground
          style={styles.image}
          source={{
              uri: `https://freerangestock.com/sample/140799/wood-background--dark-wooden-background.jpg`,
            }}
      >

      {/* game image tile */}
      <View style={styles.imageCard}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: dummyGame.image,
          }}
          >
        </ImageBackground>
      </View>

      <SwipeableDetails/>

      <NavBar navigation={navigation} user={user}/>

      </ImageBackground>
    </View>
  )
}