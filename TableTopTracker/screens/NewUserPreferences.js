import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

import { postNewUser } from '../util/api.js';

import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'

export default function NewUserPreferences ({navigation, route}) {
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

  const newUser = { uid:uid, username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame, selectedCategories:selectedCategories.join(",")}

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
      navigation.navigate('Home', { user: response.data });
    } catch (error) {
      console.error('Error while posting new user:', error);
    }
  };

    return (
        <View>
            <Text> Hi {username}, tell me about yourself! </Text>
            <TextInput style={{backgroundColor: '#FFF5DD', marginBottom: 10, width:800, }}
              onChangeText={onChangeAge}
              value={age}
              placeholder="How old are you?"
            />
            Select your preferred playstyle
            <SelectList
              data={playstyles}
              setSelected={(selectedItem) => onChangeFavoritePlaystyle(selectedItem)}
              defaultButtonText='Select your preferred playstyle'
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', marginBottom: 10, width:800 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
            />
          Select your favorite mythical creature
          <SelectList
              data={creatures}
              setSelected={(selectedItem) => onChangeFavoriteMythicalCreature(selectedItem)}
              defaultButtonText="Select your favorite mythical creature"
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
          />

            <TextInput style={{backgroundColor: '#FFF5DD', marginBottom: 10, width:800 }}
              onChangeText={onChangeFavoriteBoardGame}
              value={favoriteBoardGame}
              placeholder="Favorite board game?"
            />
            <Text>

            Select your favorite categories<br></br>
            <MultipleSelectList
              setSelected={(val) => setSelectedCategories(val)}
              data={category}
              save="value"
              label="Categories"
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
              maxHeight = "300"
            />

<br></br>
            <Button
              title="Next"
              onPress={ checkTextInput
              }
            />

            </Text>
        </View>
    )
}