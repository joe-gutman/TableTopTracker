import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.colors.onBackground, // consistent bg,
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
    backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '100%'
  },
  card: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: theme.colors.onTertiary,
    borderRadius: 5,
    width: 300,
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
  buttonMargin: {
    marginRight: 8
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
  },
  title: {
    fontFamily: theme.fonts.Bold
  }
});

export default styles;