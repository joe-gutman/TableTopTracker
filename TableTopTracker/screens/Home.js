import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';

export default function Home ({ navigation, route }) {

  const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const [ listType, setListType ] = useState(collections[0]);

  let { user, handleLogout } = route.params;
  console.log('route.params', route.params);
  console.log('user in home page: ', user);

  // console.dir(allDummyGames);
  // console.dir(personalDummyGames);
  const [ listTypes, setListTypes ] = useState([ 'All', 'My Games', 'Recommendations', 'Liked', 'Wishlist' ]);
  const [ selectedList, setSelectedList ] = useState(listTypes[0]);
  const {user, handleLogout } = route.params;

  return (
    <View>
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