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
    borderTopRightRadius: 5,
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
    flexGrow: 1
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    width: 95,
    marginLeft:'auto',
    marginRight:'auto',
  },
  rightBox: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 5,
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
    flexGrow: 1
  },
  centerTop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  centerBottom: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 50,
  },
  navButtons: {
    backgroundColor: theme.colors.primary,
    height: '100%',
    width: 50,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notch: {
    height: 50,
    width: 110,
    marginLeft: -7,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    marginTop: -30,
  },
  searchButton: {
    width: 60,
    height: 60,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop: 8,
  },
  searchButtonContainer: {
    backgroundColor: '73A260',
    width: 80,
    height: 80,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop: -40,
    borderRadius: '100%',
  }
});

export default styles;