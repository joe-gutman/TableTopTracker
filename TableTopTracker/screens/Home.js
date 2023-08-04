import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
import CollectionButton from '../components/Collections/CollectionButton.js'

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

      <ImageBackground
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/Asset-_Background-Wood.png')}
      >

      <Text>This is {user.email}'s HomePage</Text>
      <View style={ styles.gameListContent }>

        <FlatList horizontal={true}>
          data={collections}
          renderItem={({collection}) => <CollectionButton collection={collection} keyExtractor={collection => collection}/>}
        </FlatList>
        <ScrollView horizontal={true}>
          {collections.map((collection) => <CollectionButton
            collection={collection}
            key={collection}
            />)}
        </ScrollView>

        <GamesList
          handlePress={() => {
            navigation.navigate('Game Details', {user: user})
          }}
          games={ allDummyGames }
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