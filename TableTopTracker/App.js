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

import GamesList from './components/GameList/GamesList.js';
import allDummyGames from './dummy/allDummyGames.js';

import Recommendations from './components/GameList/Recommendations.js';
import recommendedDummyGames from './dummy/recommendedDummyGames.js';

import Personal from './components/GameList/Personal.js';
import personalDummyGames from './dummy/personalDummyGames.js';

const Stack = createNativeStackNavigator();

export default function App() {
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
      <GamesList games={ allDummyGames } />
      <Recommendations games={ recommendedDummyGames } />
      <Personal games={ personalDummyGames } />
    </PaperProvider>
  );
};

// AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});