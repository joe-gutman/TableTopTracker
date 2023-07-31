import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.colors.background, // consistent bg,
    // paddingVertical: 10,
    // paddingHorizontal: 15
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flexGrow: 1,
    padding: 10
  },
  card: {
    flex: 1,
    marginBottom: 10
  },
  focusButton: {
    color: 'blue',
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  selectedButton: {
    backgroundColor: 'blue'
  }
});

export default styles;