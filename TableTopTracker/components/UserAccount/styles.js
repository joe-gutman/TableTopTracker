import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ECE4B7',

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
  NameContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECE4B7',
    // borderWidth: 1, 
    borderColor: 'black', 
    borderStyle: 'solid',
    marginBottom: 15
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: '90%',
    height: 50,
    marginBottom: 15,
    backgroundColor: '#FFF5DD',
    borderBottomWidth: 1, 
    borderColor: 'black', 
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
    borderBottomWidth: 1,
    borderColor: 'black', 
    borderStyle: 'solid',
    borderRadius: 8
  },
  CategoryColumn: {
    flexDirection: 'column',
    padding: 5,
    width: 150,
    height: 190,
    backgroundColor: '#FFF5DD',
    // borderWidth: 1, 
    borderColor: 'black', 
    borderStyle: 'solid',
  },
  InputText: {
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 18, 
    color: '02020B', 
  },
  NameText: {
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black', 
    borderStyle: 'solid',
    fontSize: 36, 
    color: '02020B',
  },
  eachCategory: {
    flexDirection: 'row',
    // borderWidth: 1, 
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom: 10,
    padding: 2,
  },
  EditInput: {
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: '90%',
    height: 50,
    marginTop: 15,
    backgroundColor: '#FFF5DD',
    borderBottomWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'solid',
    borderRadius: 8
  },
  DropDown: {
    backgroundColor: '#FFF5DD', 
    padding: 10, 
    marginBottom: 15, 
    width: 340,
    
  }
});
export default styles;