import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ECE4B7',
    marginTop: 45,
    marginBottom: 0,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  wood:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  InnerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#FFF5DD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 75,
},
  NameContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECE4B7',
    // borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    width: '90%',
    height: 50,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderBottomWidth: 2, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    borderRadius: 8
  },
  MainCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    height: 200,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderBottomWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    borderRadius: 8
  },
  CategoryColumn: {
    flexDirection: 'column',
    padding: 5,
    width: 150,
    height: 190,
    backgroundColor: '#FFF5DD',
    // borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
  },
  text: {
    alignItems: 'center',
    // borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    fontSize: 18, // Set the font size in pixels
    color: '02020B', // Set the text color
  },
  eachCategory: {
    flexDirection: 'row',
    // borderWidth: 1, // Add border width
    borderColor: 'black', // Set border color
    borderStyle: 'solid',
    marginBottom: 10,
    padding: 2,
  }
});
export default styles;