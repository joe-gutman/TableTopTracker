import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

import NavBar from '../components/NavBar/NavBar.js';

export default function NewUserPreferences ({navigation, username}) {
  const [age, onChangeAge] = React.useState('');
  const [playstyle, onChangePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');

    return (
        <View>
            <Text> Hi {username}, tell me about yourself! </Text>
            <TextInput
              onChangeAge={onChangeAge}
              value={age}
              placeholder="How old are you?"
            />
            <TextInput
              onChangePlaystyle={onChangePlaystyle}
              value={playstyle}
              placeholder="What's your preferred playstyle?"
            />
            <TextInput
              onChangeFavoriteMythicalCreature={onChangeFavoriteMythicalCreature}
              value={favoriteMythicalCreature}
              placeholder="Favorite Mythical Creature?"
            />
            <TextInput
              onChangeFavoriteBoardGame={onChangeFavoriteBoardGame}
              value={favoriteBoardGame}
              placeholder="Favorite board game?"
            />
            <Text>

            LIST GAME CATEGORIES HERE


            </Text>
        </View>
    )
}