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
    secondary: 'yellow'
  }


};

export default theme;