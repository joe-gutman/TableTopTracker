import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';

// testing Slider for Patrick
import SickSlider from '../components/Sliders/SickSlider';

export default function Home ({ navigation, route }) {

  const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const [ listType, setListType ] = useState(collections[0]);
  const [gameDetails, setGameDetails] = useState({});

  let { user, handleLogout } = route.params;
  console.log('route.params', route.params);
  console.log('user in home page: ', user);

  // console.dir(allDummyGames);
  // console.dir(personalDummyGames);

  return (
    <View style={{paddingBottom: '40px'}}>
      <Text>(Alex): Display Slider for Patrick</Text>
      <SickSlider />

      <Text>This is {user.email}'s HomePage</Text>
      <View style={ styles.gameListContent }>
        <ButtonList
          collections={ collections }
          listType={ listType }
          setListType={ setListType }
        />
      {/* <View>
        <Button
          title="Game Details"
          onPress={() => {
            navigation.navigate('Game Details', {user: user.username})
          }}>Game Detail</Button>
      </View> */}
        <GamesList
          handlePress={() => {
            navigation.navigate('Game Details', {user: user})
          }}
          games={ allDummyGames }
          listType={ listType }
        />
      </View>

      <NavBar navigation={navigation} user={user}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameListContent: {
    flex: 1, // takes 70% of available space
    marginTop: 10
  },
});