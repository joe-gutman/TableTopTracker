import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: theme.colors.background,
    height: '100%',
  },
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
    flexDirection: 'column',
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  greenWords: {
    color: theme.colors.primary,
  },
  orangeWords: {
    color: theme.colors.secondary,
  },
  bigCircleButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.onTertiary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.onBackground,
    marginBottom: 10,
  },
  createAccount: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default styles;