import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
import CollectionButton from '../components/Collections/CollectionButton.js'
import {useSelector} from "react-redux";
import styles from '../components/GameList/styles.js';

export default function Home ({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  // const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const {collections} = useSelector(state => state.collections)
  const [ listType, setListType ] = useState('My Games');

  let { user, handleLogout } = route.params;
  console.log('route.params', route.params);
  console.log('user in home page: ', user);

  // console.dir(allDummyGames);
  // console.dir(personalDummyGames);

  return (
      <ImageBackground
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/Asset-Background-Wood.png')}
      >

      <View style={styles.gameListContent}>

        <ScrollView horizontal={true} contentContainerStyle={styles.scrollContents}>
          {Object.keys(collections).map((key) =>
            <CollectionButton
              listType={listType}
              collection={key}
              onSelect={(key) => setListType(key)}
              keyExtractor={key}
              key={key}
            />
          )}
        </ScrollView>

        <GamesList
          style={styles.scrollContents}
          handlePress={(game) => {
            navigation.navigate('Game Details', {user: user, game})
          }}
          games={ collections[listType] }
          listType={ listType }
        />
      </View>

      <NavBar navigation={navigation} user={user}/>

      </ImageBackground>
  )
}