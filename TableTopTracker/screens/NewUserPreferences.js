import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function newUserPreferences ({navigation, route}) {
  const [age, onChangeAge] = React.useState('');
  const [playstyle, onChangePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');

    return (
        <View>
            <Text> Tell me about yourself! </Text>
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
              placeholder="Favorite Mythical Create"
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