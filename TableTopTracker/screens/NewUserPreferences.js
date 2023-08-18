import React from 'react';

import { StyleSheet, Text, View, TextInput, Button,Image, ImageBackground, Pressable } from 'react-native';
import styles from './stylesheets/newUserPreferencesStyles.js';
import NavBar from '../components/NavBar/NavBar.js';

import { postNewUser } from '../util/api.js';

import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'
import {useDispatch, useSelector} from 'react-redux'
import {handleSetUser} from "../state/app/actions";
import {handleReceiveCollections} from "../state/collections/actions"

export default function NewUserPreferences ({navigation, route}) {
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const {uid, email, fullname, username, profilePhoto } = route.params;
  const [age, onChangeAge] = React.useState('');
  const [preferred_playstyle, onChangeFavoritePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  const playstyles = ["Solo", "1v1", "2-4", "4-8", '8+']
  const creatures = ['Griffin', 'Chimera', 'Phenoix', 'Dragon', 'Pikachu']
  const category = ['Fantasy', 'Action', 'Strategy', 'RPG']

  const [ageError, setAgeError] = React.useState('');
  const [playstyleError, setPlaystyleError] = React.useState('');
  const [creatureError, setCreatureError] = React.useState('');
  const [boardGameError, setBoardGameError] = React.useState('');

  const newUser = { username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame, selectedCategories:selectedCategories.join(",")}

  const handleSearchChange = (text) => {
    const filteredData = category.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredData);
    setSearchText(text);
  };

  const checkTextInput = async () => {
    if (!age.trim()) {
      alert('Please Enter Age');
      return;
    }

    if (!preferred_playstyle.trim()) {
      alert('Please Choose a Playstyle');
      return;
    }

    if (!favoriteMythicalCreature.trim()) {
      alert('Please Choose a Mythical Creature');
      return;
    }

    if (!favoriteBoardGame.trim()) {
      alert('Please Choose a BoardGame');
      return;
    }

    if (selectedCategories.length === 0) {
      alert('Please Select One or More categories')
      return;
    }

    try {
      console.log('newUser', newUser);
      const response = await postNewUser(newUser);
      console.log(response, 'RESPONSE IS <<')
      dispatch(handleReceiveCollections(response.data))
      dispatch(handleSetUser(newUser));
      navigation.navigate('Home', { user: response.data });
    } catch (error) {
      console.error('Error while posting new user:', error);
    }
  };

    return (

        <View style={styles.parentContainer}>
          <ImageBackground
            source={require('../assets/Asset-Background-Wood.png')}
            style={styles.wood} >

          <Image
                source={require('../assets/WardenAsk.png')}
                style={styles.logoImage}
            />
          {/* <Text> Hi {username}, tell me about yourself! </Text> <br></br> */}
          <View style={styles.centeredContent}>

            <TextInput style={styles.textInputBox}
              onChangeText={onChangeAge}
              value={age}
              placeholder="Enter your age"
            />

            <SelectList
              style={[styles.textInputBox, styles.centeredContent]}
              data={playstyles}
              setSelected={(selectedItem) => onChangeFavoritePlaystyle(selectedItem)}
              placeholder='Select your preferred playstyle'
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', marginBottom: 10, width: 275 }}
              dropdownTextStyles = {{color: "#4A3018",fontSize: 16}}
              inputStyles={{color: "#4A3018",fontSize: 16}}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:275 }}
            />

          <SelectList
            style={[styles.textInputBox, styles.centeredContent]}
                    data={creatures}
              setSelected={(selectedItem) => onChangeFavoriteMythicalCreature(selectedItem)}
              placeholder="Select your favorite mythical creature"
              search = {false}
              inputStyles={{color: "#4A3018",fontSize: 16}}
              dropdownTextStyles = {{color: "#4A3018", fontSize: 16}}
              boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width: 275 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width: 275 }}
          />

            <TextInput style={styles.textInputBox }
              onChangeText={onChangeFavoriteBoardGame}
              value={favoriteBoardGame}
              placeholder="Enter your favorite board game?"
            />
            <Text>


            <MultipleSelectList
            style={[styles.textInputBox, styles.centeredContent]}
              setSelected={(val) => setSelectedCategories(val)}
              data={category}
              save="value"
              label="Categories"
              search = {false}
              placeholder = "Select your favorite categories"
              boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width: 275}}
              inputStyles={{color: "#4A3018",fontSize: 16}}
              dropdownTextStyles = {{color: "#4A3018",fontSize: 16}}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width: 275}}
              maxHeight = "300"
            />

            <br></br>
            <View style={styles.buttonsContainer}>
            <Pressable
            style={styles.bigGreenButton}
            title="Register"
            onPress={ checkTextInput}><Text>Register</Text></Pressable>
            </View>

            </Text>

            </View>
            </ImageBackground>
        </View>
    )
  }