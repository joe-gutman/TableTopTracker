import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ECE4B7',
    borderWidth: 1, // Add border width
    borderColor: 'red', // Set border color
    borderStyle: 'solid',
  },
  InnerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 4,
    height: 50,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  },
  MainCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    height: 200,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  },
  CategoryColumn: {
    flexDirection: 'column',
    padding: 5,
    width: 150,
    height: 190,
    backgroundColor: '#FFF5DD',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  },
  circleContainer: { 
    flex: 1,
    width: 100, 
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#007bff'
  },
  text: {
    alignItems: 'center',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    fontSize: 18, // Set the font size in pixels
    color: '02020B', // Set the text color
  },
  eachCategory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  }
});

export default styles;