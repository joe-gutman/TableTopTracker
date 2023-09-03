import * as React from 'react';
import { useState, useEffect } from 'react';

import { name as appName } from './app.json';

import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import {PaperProvider, Snackbar} from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//SCREENS
import Landing from './screens/Landing.js';
import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';
import Home from './screens/Home.js';
import NewUserPreferences from './screens/NewUserPreferences.js';
import HeaderTitle from './components/TopNav/TopNavLogoOnly.js';
import UserAccount from './screens/UserAccount';
import GameDetails from './screens/GameDetails';
import GameWarden from './screens/GameWarden';
import Search from './screens/Search';
import EditAccount from './screens/EditAccount';
import SearchResults from './screens/SearchResults.js';

import personalDummyGames from './components/GameList/dummy/personalDummyGames';

//yarn add firebase, yarn add @react-native-firebase/auth
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig.js'
import {Provider, useDispatch, useSelector} from "react-redux";
import { store } from './state/index.js';
import AppModal from "./components/AppModal";

//STYLING
import theme from './theme';
import * as Font from 'expo-font';
const icons = {
  'backArrow': require('./assets/Asset-TopNav-BackArrow.png'),
};

//REDUX
import {handleRemoveNotification} from "./state/app/actions";

const Stack = createNativeStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};



function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const modalState = useSelector((state) => state.modal);
  const [ username, setUsername ] = useState('Arnold');

  // console.log(state);

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Stack.Navigator
          animationEnabled={true}
        >
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{title: 'TableTop Tracker'}}
            username={username}
          />
          <Stack.Screen name="Sign Up" component={SignUp}/>
          <Stack.Screen name="Edit Account" component={EditAccount} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="New User Preferences" component={NewUserPreferences} />
          <Stack.Screen name="User Account" component={UserAccount} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackImageSource: icons['backArrow'],
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTitle: () => <HeaderTitle />,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Game Details"
            component={GameDetails}
            options={{
              headerBackImageSource: icons['backArrow'],
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTitle: () => <HeaderTitle />,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="Game Warden" component={GameWarden}/>
          <Stack.Screen name="Search Results" component={SearchResults}/>
          <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
      </NavigationContainer>
      {
        state.modal.open &&
        <AppModal />
      }
      {state.app.notification && (
        <Snackbar
          visible={!!state.app.notification}
          duration={3000}
          style={{backgroundColor: 'gray'}}
          onDismiss={() => dispatch(handleRemoveNotification())}
          // action={{
          //   label: 'Undo',
          //   onPress: () => {
          //     // Do something
          //   },
          // }}
        >
          {state.app.notification}
        </Snackbar>
      )}
    </PaperProvider>
  );
}

// AppRegistry.registerComponent(appName, () => App);