//change name of file to whatever you want :D
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
// import react native paper
import dummyGame from'../components/GameDetailsData/gameDetailsDummyData.js';
// Component is currently rendered to bottom of App main page

// figure out how props are gonna be passed to this component
// Add screen for game details
// Add pressHandlers to game tiles

export default function GameDetails () {
  const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    detailsContainer: {
      flex: 1,
      backgroundColor: '#FBF5E7',
      padding: 50,
    },
  });

  return (
    <>
    <View style={styles.imageContainer}>
      <Image
        style= {styles.image}
        source={{
            uri: 'https://cf.geekdo-images.com/Li9nJ4DOsFs1CuwZjkyg3g__original/img/29VmqkcRWoq_WS9uGtftdf6teyU=/0x0/filters:format(jpeg)/pic582574.jpg',
          }}
        />
    </View>
    <View style={styles.detailsContainer}>
      <Text>{dummyGame.name}</Text>
      <Text>
        {/* render player number or range */}
        {dummyGame.minPlayers===dummyGame.maxPlayers
          ? dummyGame.minPlayers
          : `${dummyGame.minPlayers}-${dummyGame.maxPlayers}`}
        {/* render 'player' or 'players' */}
        </Text>
      <Text>{dummyGame.category.join(',')}</Text>
      <Text>{dummyGame.minPlayTime}
        </Text>
      <Text>Complexity</Text>
      <Text>{dummyGame.year}</Text>
      <Text>{dummyGame.description}</Text>
    </View>
    </>
  )
}