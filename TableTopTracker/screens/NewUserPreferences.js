import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import { postNewUser } from '../util/api.js';
=======

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

import { postNewUser } from '../util/api.js';

import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'


>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
export default function NewUserPreferences ({navigation, route}) {
  const {uid, email, fullname, username, profilePhoto } = route.params;
  const [age, onChangeAge] = React.useState('');
  const [preferred_playstyle, onChangeFavoritePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');
<<<<<<< HEAD
  const newUser = { username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame}
    return (
        <View>
            <Text> Hi {username}, tell me about yourself! </Text>
            <TextInput
=======
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selected, setSelected] = React.useState("");


  const playstyles = ["Solo", "1v1", "2-4", "4-8", '8+']
  const creatures = ['Griffin', 'Chimera', 'Phenoix', 'Dragon', 'Pikachu']
  const category = ['Fantasy', 'Action', 'Strategy', 'RPG']


  const newUser = { uid:uid, username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame, selectedCategories:selectedCategories}

  const handleSearchChange = (text) => {
    const filteredData = category.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredData);
    setSearchText(text);
  };
    return (
        <View>
            <Text> Hi {username}, tell me about yourself! </Text>
            <TextInput style={{backgroundColor: '#FFF5DD', marginBottom: 10, width:800, }}
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
              onChangeText={onChangeAge}
              value={age}
              placeholder="How old are you?"
              required
            />
<<<<<<< HEAD
            <TextInput
              onChangeText={onChangeFavoritePlaystyle}
              value={preferred_playstyle}
              placeholder="What's your preferred playstyle?"
            />
            <TextInput
              onChangeText={onChangeFavoriteMythicalCreature}
              value={favoriteMythicalCreature}
              placeholder="Favorite Mythical Creature?"
            />
            <TextInput
=======
            'Select your preferred playstyle'
            <SelectList
              data={playstyles}
              setSelected={(selectedItem) => onChangeFavoritePlaystyle(selectedItem)}
              defaultButtonText='Select your preferred playstyle'
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', marginBottom: 10, width:800 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
            />
          'Select your favorite mythical creature'
          <SelectList
              data={creatures}
              setSelected={(selectedItem) => onChangeFavoriteMythicalCreature(selectedItem)}
              defaultButtonText="Select your favorite mythical creature"
              search = {false}
              boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
              dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10, width:800 }}
          />

            <TextInput style={{backgroundColor: '#FFF5DD', marginBottom: 10, width:800 }}
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
              onChangeText={onChangeFavoriteBoardGame}
              value={favoriteBoardGame}
              placeholder="Favorite board game?"
              required
            />
            <Text>
<<<<<<< HEAD
            LIST GAME CATEGORIES HERE
=======

            'Select your favorite categories'<br></br>
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
>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
            <Button
              title="Next"
              onPress={async () => {
                console.log('newUser', newUser)
                var response = await postNewUser(newUser)
                navigation.navigate('Home', {user:response.data});
              }
              }
            />
<<<<<<< HEAD
=======

>>>>>>> 134fa6e77cf742a37185c96b1e091947dadbf8fc
            </Text>
        </View>
    )
}