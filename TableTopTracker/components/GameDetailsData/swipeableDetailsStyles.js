import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:  '1.5em',
  },
  tile: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    borderWidth: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FBF5E7',
    borderColor: '#FBF5E7',
    padding: 20,
    overflowY: 'hidden',
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
    paddingBottom: 10,
  },
  column: {
    flex: 1,
  },
  titleText: {
    fontSize: '1.5em',
    paddingBottom: 20,
  },
  addToCollectionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addToCollectionButton: {
    height: 20,
    width: 200,
    backgroundColor: theme.colors.secondary,

    fontSize: 16,
    borderRadius: 50,
  },
  addToCollectionText: {
    color: theme.colors.onPrimary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;