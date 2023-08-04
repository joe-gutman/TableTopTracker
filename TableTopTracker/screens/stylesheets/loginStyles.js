import { StyleSheet } from 'react-native';
import theme from '../../theme.js';

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.onBackground,
    height: '100%',
    margin: '0',
  },
  wood: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
    height: '600px',
    marginTop: 50,
    marginLeft:'auto',
    marginRight:'auto',
  },
  logoImage: {
    width: '80%',
    aspectRatio: 400/300,
    resizeMode: 'contain',
    padding: 0,
    marginTop: 65,
    marginLeft:'auto',
    marginRight:'auto',
  },
  boardGameGeek: {
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: -25,
    marginBottom: 35,
  },
  registerButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 19,
    height: 51,
    width: 259,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    marginTop: 85,
    color: 'white',
  },
  loginContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft:'auto',
    marginRight:'auto',
  },
  greenWords: {
    color: theme.colors.primary,
  },
  orangeWords: {
    color: theme.colors.secondary,
  },
  textInputBox: theme.components.textInput,
  loginButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 19,
    height: 51,
    width: 259,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    marginTop: 10,
    color: 'white',
  },
  loginButtonText: {
    marginLeft:'auto',
    marginRight:'auto',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;