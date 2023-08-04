import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: theme.colors.onBackground, // consistent bg,
    // paddingVertical: 10,
    // paddingHorizontal: 15
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    // backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flexGrow: 1,
    padding: 10,
    // backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  card: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: theme.colors.onTertiary,
    borderRadius: 8,
    width: 300,
    margin: 5, //'auto',
    boxShadow: '0 0.4em rgba(0, 0, 0, 0.2)',
  },
  focusButton: {
    color: 'blue',
    padding: 8,
    margin: 5,
    borderRadius: 5
  }, /*
  selectedButton: {
    backgroundColor: 'blue'
  }, */
  buttonListContainer: {
    height: 80,
    backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    margin: 8,
    width: 60,
    borderColor: theme.colors.onSecondary,
    padding: 'auto',
  },
  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'cover', // others available
    marginRight: 10 // adjust margin as needed
  },
  cardGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontFamily: theme.fonts.Bold
  },
  button: {
    borderRadius: 10,
    borderColor: '#FFFFFF',
    border: 5,
  }
});

export default styles;