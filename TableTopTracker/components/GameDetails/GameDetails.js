//change name of file to whatever you want :D
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
// import react native paper
import dummyGame from'./gameDetailsDummyData.js';

// Component is currently rendered to bottom of App main page

// figure out how props are gonna be passed to this component
// Add screen for game details
// Add pressHandlers to game tiles

export default function GameDetails () {

  return (
    <View>
      {/* Image of Game */}
      <Image
          source={{
            uri: 'https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__original/img/29VmqkcRWoq_WS9uGtftdf6teyU=/0x0/filters:format(jpeg)/pic582574.jpg',
          }}
        />
      <Text>{dummyGame.name}</Text>
      <Text>{dummyGame.minPlayers}
      </Text>
      <Text>{dummyGame.category.join(',')}</Text>
      <Text>{dummyGame.minPlayTime}
        </Text>
      <Text>Complexity</Text>
      <Text>{dummyGame.year}</Text>
      <Text>{dummyGame.description}</Text>
    </View>
  )
}

// // DUMMY DATA
// const gameID = 675;
// const year = 1977;
// const minPlayers = 2;
// const maxPlayers = 2;
// const playTime = 45;
// const minPlayTime = 45;
// const maxPlayTime = 45;
// const age = 12;
// const name = "4th Dimension";
// const secondaryName = "Fourth Dimension";
// const description = "4th Dimension is a very spacey-looking game with a small circular board divided into sectors each track of which has twice as many spaces as the one closer to the center. Each player get 6 warriors, 3 rangers, 2 guardians, and one time lord. Guardians can capture warriors and rangers; rangers can capture warriors; the time lord can capture rangers and guardians; but the lowly warriors are the only ones who can capture the time lord and win the game. Captures are made by moving next to rather than on top of enemy pieces. Each piece can move only one space at a time but they can also &quot;warp&quot; by leaving the board and leaving a 4-D marker behind. The piece can then stay in the warp zone for up to three turns or warp back onto the board up to two spaces away from the 4-D marker. This game has an inconveniently small gameboard and plastic pieces that look like little futuristic chairs.<br/><br/>The game was first published in Games &amp; Puzzles magazine. The designers produced it as a standalone game later the same year, and it was later licensed by TSR.";
// const thumbnail = "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__thumb/img/6AUVALlhQ_dtP04JEAJXG1gQKhY=/fit-in/200x150/filters:strip_icc()/pic582574.jpg";
// const image = "https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__original/img/29VmqkcRWoq_WS9uGtftdf6teyU=/0x0/filters:format(jpeg)/pic582574.jpg";
// const category = ["Abstract Category", "Science Fiction"];
