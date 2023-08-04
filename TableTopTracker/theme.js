import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

//theme.colors.property
const theme = {
  ...DefaultTheme,
  dark: false,
  version: 3,
  roundness: 5,
  colors: {
    // ...DefaultTheme.colors,
    //PRIMARY(Green)---------
    primary: '#74a461', //green - logo, some buttons
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
    onTertiary: '#FFF5DD', //beige for user inputs, boxes, etc,
    // tertiaryContainer: ,
    // onTertiaryContainer: ,

    //NEUTRAL---------
    background: '#DAAF88', //orangebeige
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
  // },
  components: {
    woodBackground: './assets/Asset-_Background-Wood.png',
    textInput: {
      color: "#4A3018",
      fontSize: 16,
      height: 40,
      width: '70%',
      borderRadius: 8,
      backgroundColor: '#FFF5DD',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      marginBottom: 10,
      marginLeft:'auto',
      marginRight:'auto',
      padding: '15px',
    },
    gameWardenCarCard: {

    },
    gameWardenSpeech: {

    },
    select: {

    },
    bigGreenButton: {
      backgroundColor: '#7FB069',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 50,
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  }
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