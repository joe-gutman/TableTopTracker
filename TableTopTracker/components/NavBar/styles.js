

import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#ECE4B7',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
    },
  });

export default styles;