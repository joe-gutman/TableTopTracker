import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
import CollectionButton from '../components/Collections/CollectionButton.js'

// testing Slider for Patrick
import SickSlider from '../components/Sliders/SickSlider';
import {useSelector} from "react-redux";

export default function Home ({ navigation, route }) {

  // const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const {collections} = useSelector(state => state.collections)
  const [ listType, setListType ] = useState('My Games');
  const [gameDetails, setGameDetails] = useState({});

  let { user, handleLogout } = route.params;
  console.log('route.params', route.params);
  console.log('user in home page: ', user);
  console.log(collections[0]);

  // console.dir(allDummyGames);
  // console.dir(personalDummyGames);

  return (
    <View style={{paddingBottom: '40px'}}>

      <ImageBackground
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/Asset-Background-Wood.png')}
      >

      <View style={ styles.gameListContent }>

        <FlatList horizontal={true}>
          data={collections}
          renderItem={({collection}) => <CollectionButton collection={collection} keyExtractor={collection => collection}/>}
        </FlatList>
        <ScrollView horizontal={true}>
          {Object.keys(collections).map((key) =>
            <CollectionButton
              collection={key}
              onSelect={(key) => setListType(key)}
            />
          )}
        </ScrollView>

        <GamesList
          handlePress={(game) => {
            navigation.navigate('Game Details', {user: user, game})
          }}
          games={ collections[listType] }
          listType={ listType }
        />
      </View>

      <NavBar navigation={navigation} user={user}/>

      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameListContent: {
    flex: 1, // takes 70% of available space
    marginTop: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});