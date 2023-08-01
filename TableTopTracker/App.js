import * as React from 'react';

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

import theme from './theme';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './screens/Landing.js'
import SignUp from './screens/SignUp.js'
import Login from './screens/Login.js'
import Home from './screens/Home.js'
import NewUserPreferences from './screens/NewUserPreferences.js'


import UserAccount from './screens/UserAccount';
import GameDetails from './screens/GameDetails';
import GameWarden from './screens/GameWarden';
import Search from './screens/Search';
import SearchResults from './screens/SearchResults.js';

// alex: gameslist components / dummy data
import GamesList from './components/GameList/GamesList.js';
import Recommendations from './components/Recommendation/Recommendations';
import MyGames from './components/GameList/MyGames';
import ButtonList from './components/GameList/ButtonList';
import allDummyGames from './components/GameList/dummy/allDummyGames';
import recommendedDummyGames from './components/Recommendation/recommendedDummyGames';
import personalDummyGames from './components/GameList/dummy/personalDummyGames';

// loren and vicky: game details page with dummy data:

const Stack = createNativeStackNavigator();

//yarn add firebase, yarn add @react-native-firebase/auth
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig.js'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {

  // alex: some states & stuff
  const listTypes = [ 'All', 'My Games', 'Recommendations', 'Liked', 'Wishlist' ];
  // TODO: implement ability to add custom lists

  const [ selectedList, setSelectedList ] = React.useState(listTypes[0]);

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{title: 'TableTop Tracker'}}
            />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="New User Preferences" component={NewUserPreferences} />
            <Stack.Screen name="User Account" component={ UserAccount } />
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="Game Details" component={ GameDetails } />
            <Stack.Screen name="Game Warden" component={ GameWarden } />
            <Stack.Screen name="Search Results" component={ SearchResults } />
            <Stack.Screen name="Search" component={ Search } />
          </Stack.Navigator>
      </NavigationContainer>


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