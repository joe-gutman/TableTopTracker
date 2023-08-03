import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'fixed',
    backgroundColor: theme.colors.primary,
    bottom: '0',
    display: 'flex',
    flexDirection: "row",
    // justifyContent: "space-evenly",
    zIndex: "999",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  leftColumn: {
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 5,
    flex: 2,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'column'
  },
  centerColumn: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column'
  },
  centerTop: {

  },
  centerMiddle: {

  },
  centerBottom: {
    backgroundColor: theme.colors.primary,

  },
  rightColumn: {
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: 5,
    flex: 2,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  littleButton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  bigButton: {
    backgroundColor: theme.colors.onSecondary,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  }
});

export default styles;