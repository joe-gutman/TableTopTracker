import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

import { postNewUser } from '../util/api.js';

export default function NewUserPreferences ({navigation, route}) {
  const {uid, email, fullname, username, profilePhoto } = route.params;
  const [age, onChangeAge] = React.useState('');
  const [preferred_playstyle, onChangeFavoritePlaystyle] = React.useState('');
  const [preferred_playstyle, onChangeFavoritePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');

  const newUser = { username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame}

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
            <TextInput
              onChangeText={onChangeAge}
              value={age}
              placeholder="How old are you?"
              required
            />
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
              onChangeText={onChangeFavoriteBoardGame}
              value={favoriteBoardGame}
              placeholder="Favorite board game?"
              required
            />
            <Text>


            LIST GAME CATEGORIES HERE
            <Button
              title="Next"
              onPress={async () => {
                console.log('newUser', newUser)
                var response = await postNewUser(newUser)
                navigation.navigate('Home', {user:response.data});
              }
              }
            />

            </Text>
        </View>
    )
}