import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  navBar: {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    flexDirection: 'row',
    zIndex: '999',
    width: '100%',
    height: 75,
    marginLeft:'auto',
    marginRight:'auto',
    // borderLeftRightRadius: 25,
    // borderTopRightRadius: 25,
  },
  leftBox: {
    borderTopLeftRadius: 25,
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
    flexGrow: 1
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    marginLeft:'auto',
    marginRight:'auto',

  },
  rightBox: {
    borderTopRightRadius: 25,
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
    flexGrow: 1
  },
  centerTop: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  centerBottom: {
    backgroundColor: theme.colors.primary,
  },
  navButtons: {
    backgroundColor: theme.colors.primary,
    height: '100%',
    width: 50,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;