import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import { useFonts } from 'expo-font'

const theme = {
  ...DefaultTheme,
  dark: false,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    //PRIMARY-----
    primary: '#7FB069', // lime green for nav bar, app name,
    onPrimary: '#ECE4B7', //
    //primaryContainer: ,
    //onPrimaryContainer: : ,

    //SECONDARY-----
    //secondary: ,
    //onSecondary: ,
    //secondaryContainer: ,
    //onSecondaryContainer: ,

    //TERTIARY-----
    //tertiary: ,
    //onTertiary: ,
    //TertiaryContainer: ,
    //onTertiaryContainer: ,

    //NEUTRAL-----
    background: '#ECE4B7',
    onBackground: '#4A3018',
    //surface: ,
    //onSurface: ,

    //NEUTRAL VARIANT-----
    //surfanceVariant: ,
    //onSurfaceVariant: ,
    //outline: ,

    //ERROR-----
    //error: ,
    //onError: ,
    //errorContainer: ,
    //onErrorContainer: ,
  },
  fonts: {
    default: {

    },
    gameWarden: {

    }
  }


};

export default theme;