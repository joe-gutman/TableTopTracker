import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
import CollectionButton from '../components/Collections/CollectionButton.js'
import {useSelector} from "react-redux";
import styles from '../components/GameList/styles.js';

export default function Home ({ navigation, route }) {

  // const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const {collections} = useSelector(state => state.collections)
  const [ listType, setListType ] = useState('My Games');
  const [ reshuffle, setReshuffle ] = useState('My Games'); // changes to this state only trigger shuffle animation
  const [gameDetails, setGameDetails] = useState({});
  let { user, handleLogout } = route.params;

  // useEffect(() => {
  //   console.log(`list change triggered to ${reshuffle}`);
  //   setListType(reshuffle);
  // }, [reshuffle])


  return (
    <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/Asset-Background-Wood.png')}
    >
      <View style={{paddingBottom: '40px'}}>
      <View style={styles.homePageContainer}>

        <ScrollView horizontal={true}>
          {Object.keys(collections).map((key) =>
            <CollectionButton
              key={key}
              collection={key}
              onSelect={(key) => {
                setReshuffle(key);
              }}
              listType={listType}
            />
          )}
        </ScrollView>

        <GamesList
          handlePress={(game) => {
            navigation.navigate('Game Details', {user: user, game})
          }}
          games={ collections[listType] }
          setListType={ setListType }
          reshuffle={reshuffle}
        />
      </View>

      <NavBar navigation={navigation} user={user}/>
      </View>
    </ImageBackground>
  )
}