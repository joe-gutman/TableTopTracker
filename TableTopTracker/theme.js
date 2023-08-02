import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import { useFonts } from 'expo-font';

// const theme = {
//   ...DefaultTheme,
//   dark: false,
//   version: 3,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow'
//   }


// };

const theme = {
  colors: {
    //PRIMARY(Green)---------
    primary: '#7FB069',
    onPrimary: '#FFFFFF',
    // primaryContainer: '',
    // onPrimaryContainer: ,

    //SECONDARY(Orange)   ---------
    secondary:  '#CA5232',
    // onSecondary: ,
    // secondaryContainer: ,
    // onSecondaryContainer: ,

    //TERTIARY---------
    // tertiary: ,
    // onTertiary: ,
    // tertiaryContainer: ,
    // onTertiaryContainer: ,

    //NEUTRAL---------
    // background: ,
    // onBackground: ,
    // surface: ,
    // onSurface: ,

    //NEUTRAL VARIANT---------
    // surfaceVariant: ,
    // onSurfaceVariant: ,
    // outline: ,

    //ERROR---------
    // error: ,
    // onError: ,
    // errorContainer: ,
    // onErrorContainer: ,

  },
  fonts: {

  }
}
export default theme;