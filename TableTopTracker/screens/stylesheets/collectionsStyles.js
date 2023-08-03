import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  cardBorder: {
    width: 100,
    height: 125,
    borderColor: theme.colors.onPrimary,
    backgroundColor: theme.colors.onPrimary,
    borderWidth: 5,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  cardMain: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    width: 90,
    height: 100,
    borderWidth: 5,
    margin: 0,
    borderRadius: 5,
    justifyContent: 'center',
  },
  cardText: {
    overflow: 'hidden',
    color: theme.colors.tertiary,
    fontSize: '0.75em',
    textAlign: 'center',
    padding: '2',
  },
  cardBottom: {
    borderColor: 'red',
    backgroundColor: 'blue',
    display: 'inline',
  },
});

export default styles;