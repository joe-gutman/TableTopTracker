import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.onBackground,
    height: '100%',
  },
  branding: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    margin: 'auto',
  },
  bgg: {
    margin: 'auto',
  },
  buttonsContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  greenWords: {
    color: theme.colors.primary,
  },
  orangeWords: {
    color: theme.colors.secondary,
  },
  bigGreenButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;