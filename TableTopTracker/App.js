import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home.js'
import Login from './screens/Login.js'

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import theme from './theme';

// ALEX'S COMPONENTS / DUMMY DATA
import GamesList from './components/GameList/GamesList';
import Recommendations from './components/Recommendation/Recommendations';
import MyGames from './components/GameList/MyGames';
import Button from './components/GameList/Button';
import allDummyGames from './components/GameList/dummy/allDummyGames';
import recommendedDummyGames from './components/Recommendation/recommendedDummyGames';
import personalDummyGames from './components/GameList/dummy/personalDummyGames';

const Stack = createNativeStackNavigator();

export default function App() {


  // ALEX'S STATES
  const listTypes = [ 'All', 'My Games', 'Recommendations', 'Liked', 'Wishlist' ];
  // TODO: implement ability to add custom lists

  const [ selectedList, setSelectedList ] = React.useState(listTypes[0]);

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* ALEX'S PROTOTYPE COMPONENTS */}
      <View style={ styles.gameListContent }>
        <Button
          listTypes={ listTypes }
          selectedList={ selectedList }
          setSelectedList={ setSelectedList }
        />
        <GamesList
          games={ allDummyGames }
          selectedList={ selectedList }
        />
        <Recommendations games={ recommendedDummyGames } />
        <MyGames games={ personalDummyGames } />
      </View>
    </PaperProvider>
  );
}

// AppRegistry.registerComponent(appName, () => App);

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