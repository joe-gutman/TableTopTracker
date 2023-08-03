import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GamesList from '../components/GameList/GamesList.js';
import MyGames from '../components/GameList/MyGames';
import ButtonList from '../components/GameList/ButtonList';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
<<<<<<< HEAD
=======

// testing Slider for Patrick
import SickSlider from '../components/Sliders/SickSlider';

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
export default function Home ({ navigation, route }) {
  const [ listTypes, setListTypes ] = useState([ 'All', 'My Games', 'Recommendations', 'Liked', 'Wishlist' ]);
  const [ selectedList, setSelectedList ] = useState(listTypes[0]);
  const {user, handleLogout } = route.params;
  return (
    <View>
<<<<<<< HEAD
        {/* <Text>`This is ${user.data.username}'s HomePage`</Text> */}
        <View style={ styles.gameListContent }>
            <ButtonList
            listTypes={ listTypes }
            selectedList={ selectedList }
            setSelectedList={ setSelectedList }
            />
            {/* <GamesList
            games={ allDummyGames }
            selectedList={ selectedList }
            />
            {<Recommendations games={ recommendedDummyGames } />}
            {<MyGames games={ personalDummyGames } />} */}
        </View>
        <View>
          <Button
            title="Game Details"
            onPress={() => {
              navigation.navigate('Game Details', {user: user.username})
            }}>Game Detail</Button>
        </View>
        <NavBar navigation={navigation} user={user.username}/>
=======
      <Text>(Alex): Display Slider for Patrick</Text>
      <SickSlider />

      <Text>This is {user.email}'s HomePage</Text>
      <View style={ styles.gameListContent }>
        <ButtonList
          collections={ collections }
          listType={ listType }
          setListType={ setListType }
        />
        <GamesList
          games={ allDummyGames }
          listType={ listType }
        />
      </View>
      <View>
        <Button
          title="Game Details"
          onPress={() => {
            navigation.navigate('Game Details', {user: user})
          }}>Game Detail</Button>
      </View>

      <NavBar navigation={navigation} user={user}/>
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
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