import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  branding: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    margin: 'auto',
  },
  bgg: {
    margin: 'auto',
  },
  userInput: {
    display: 'flex',
  },
  textInputBox: theme.components.textInput.box,
  textInputText: theme.components.textInput.text,
  bigGreenButton: theme.components.bigGreenButton,
  bigGreenButtonText: theme.components.bigGreenButtonText,
  buttonsContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenWords: {
    color: theme.colors.primary,
  },
  orangeWords: {
    color: theme.colors.secondary,
  },

});

export default styles;