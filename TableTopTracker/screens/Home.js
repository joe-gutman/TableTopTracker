import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GamesList from '../components/GameList/GamesList.js';
import MyGames from '../components/GameList/MyGames';
import ButtonList from '../components/GameList/ButtonList';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import NavBar from '../components/NavBar/NavBar.js';

export default function Home ({navigation, route}) {
  const { user, handleLogout } = route.params;
  console.log('user', user);

  return (
    <View>
        <Text>This is {user.email}'s HomePage</Text>
            {/* <View style={ styles.gameListContent }>
                <ButtonList
                listTypes={ listTypes }
                selectedList={ selectedList }
                setSelectedList={ setSelectedList }
                />
                <GamesList
                games={ allDummyGames }
                selectedList={ selectedList }
                />
                {<Recommendations games={ recommendedDummyGames } />}
                {<MyGames games={ personalDummyGames } />}
            </View> */}
        <NavBar navigation={navigation} user={user}/>
    </View>
  )
}