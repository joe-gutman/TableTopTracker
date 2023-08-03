import * as React from 'react';

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { useState } from 'react';

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

import personalDummyGames from './components/GameList/dummy/personalDummyGames';
const Stack = createNativeStackNavigator();

//yarn add firebase, yarn add @react-native-firebase/auth
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig.js'
import EditAccount from './screens/EditAccount';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  const [ username, setUsername ] = useState('Arnold');

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{title: 'TableTop Tracker'}}
              username={username}
              />
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="New User Preferences" component={NewUserPreferences} />
            <Stack.Screen name="User Account" component={UserAccount} />
            <Stack.Screen name="Edit Account" component={EditAccount} />
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Game Details" component={GameDetails}/>
            <Stack.Screen name="Game Warden" component={GameWarden}/>
            <Stack.Screen name="Search Results" component={SearchResults}/>
            <Stack.Screen name="Search" component={Search}/>
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}        

// AppRegistry.registerComponent(appName, () => App);