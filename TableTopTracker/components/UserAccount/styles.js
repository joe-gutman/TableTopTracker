import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ECE4B7'
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    height: 100,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  }
});

export default styles;