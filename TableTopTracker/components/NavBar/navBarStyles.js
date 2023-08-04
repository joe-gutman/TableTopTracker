import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  floatingButtonContainer: {
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    marginBottom: 25,
  },
  bottomRowContainer: {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    flexDirection: "row",
    zIndex: "999",
    width: "100%",
    height: 75,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftRightRadius: 25,
    borderTopRightRadius: 25,
  },
  leftColumn: {
    borderTopLeftRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
  },
  centerColumn: {
    flex: 1,
    height: 75,
    width: 75
  },
  centerTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ' ',
    justifyContent: 'center',
  },
  centerBottom: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: '0',
    height: 25,
  },
  rightColumn: {
    borderTopRightRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    flex: 3,
    height: 75,
  },
  littleButton: {
    backgroundColor: theme.colors.primary,
    height: 50,
    width: 50,
  },
  bigButtonContainer: {
    backgroundColor: theme.colors.onSecondary,
    borderRadius: 50,
  },
  bigButton: {
    borderRadius: 50,
  },
  notch: {
    width: 75
  }
});

export default styles;