import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  homePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gamesList: {
    padding: 10,
    display: 'flex',
    margin: 10,
    flexDirection: 'column',
  },
  gamesListContainer: {
    flex: 9,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: theme.colors.onTertiary,
    borderRadius: 8,
    margin: 5, //'auto',
    boxShadow: '0 0.4em rgba(0, 0, 0, 0.2)',
  },
  buttonListContainer: {
    height: 80,
    backgroundColor: theme.colors.onBackground,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    button: 8,
    width: 60,
    borderColor: theme.colors.onSecondary,
    padding: 'auto',
  },
  thumbnail: {
    width: 75,
    height: 75,
    resizeMode: 'cover', // others available
    marginRight: 10 // adjust margin as needed
  },
  thumbnailContainer: {
    padding: 'auto'
  },
  cardGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.Bold
  },
  button: {
    borderRadius: 10,
    borderColor: '#FFFFFF',
    border: 5,
  },
  scrollContents: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    // backgroundColor: 'green',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;