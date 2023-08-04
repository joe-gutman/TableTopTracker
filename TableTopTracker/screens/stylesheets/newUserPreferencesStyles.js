import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    height: '100%',
  },
  wood:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoImage: {
    marginTop: -225,
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  userInput: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputBox: theme.components.textInput,
  bigGreenButton: theme.components.bigGreenButton,
  bigGreenButtonText: theme.components.bigGreenButtonText,
  buttonsContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

});

export default styles;