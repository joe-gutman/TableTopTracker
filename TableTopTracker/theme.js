import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
// git

const theme = {
  ...DefaultTheme,
  dark: false,
  version: 3,
  roundness: 5,
  colors: {
    // ...DefaultTheme.colors,
    //PRIMARY(Green)---------
    primary: '#7FB069', //green - logo, some buttons
    onPrimary: '#FFFFFF', //white
    // primaryContainer: ,
    // onPrimaryContainer: ,

    //SECONDARY(Orange)   ---------
    secondary:  '#CA5232', //red-orange - game warden, some buttos
    onSecondary: '#FFF5DD', //big button orange in navBar
    // secondaryContainer: ,
    // onSecondaryContainer: ,

    //TERTIARY---------
    tertiary: "#4A3018", //dark brown for text
    onTertiary: '#FFF5DD', //cream for user inputs, boxes, etc,
    // tertiaryContainer: ,
    // onTertiaryContainer: ,

    //NEUTRAL---------
    background: '#ECE4B7', //pea green
    onBackground: "#4A3018", //dark brown - placeholder for wood texture image
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
  // fonts: {
  //   Regular: {
  //     fontFamily: 'Inter-Regular',
  //     fontWeight: 'normal'
  //   },
  //   Bold: {
  //     fontFamily: 'Inter-Bold',
  //     fontWeight: 'normal'
  //   },
  //   Warden: {
  //     fontFamily: 'Metamorphous',
  //     fontWeight: 'normal'
  //   }
  // }
}


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

export default theme;