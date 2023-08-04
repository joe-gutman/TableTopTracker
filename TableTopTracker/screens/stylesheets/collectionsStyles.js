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
    display: 'flex',
    boxShadow: '0 0.4em rgba(0, 0, 0, 0.2)',
  },
  cardMain: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    width: 80,
    height: 95,
    borderWidth: 5,
    margin: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    overflow: 'hidden',
    color: theme.colors.tertiary,
    fontSize: '0.75em',
    textAlign: 'center',
    marginTop: 2,
  },
  cardBottom: {
    borderColor: 'red',
    backgroundColor: 'blue',
    display: 'inline',
  },
  selectedBorder: {
    width: 100,
    height: 125,
    borderColor: theme.colors.onPrimary,
    backgroundColor: theme.colors.onPrimary,
    borderWidth: 5,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    boxShadow: '0 0.4em rgba(0, 0, 0, 0.2)',
  },
  selectedMain: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.background,
    width: 80,
    height: 95,
    borderWidth: 5,
    margin: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;