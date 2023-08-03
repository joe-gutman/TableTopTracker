import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import { postNewUser } from '../util/api.js';
export default function NewUserPreferences ({navigation, route}) {
  const {uid, email, fullname, username, profilePhoto } = route.params;
  const [age, onChangeAge] = React.useState('');
  const [preferred_playstyle, onChangeFavoritePlaystyle] = React.useState('');
  const [favoriteMythicalCreature, onChangeFavoriteMythicalCreature] = React.useState('');
  const [favoriteBoardGame, onChangeFavoriteBoardGame] = React.useState('');
  const newUser = { username: username, email: email, fullname:fullname, profilePhoto: profilePhoto, age:age, preferred_playstyle: preferred_playstyle, favoriteMythicalCreature:favoriteMythicalCreature, favoriteBoardGame:favoriteBoardGame}
    return (
        <View>
            <Text> Hi {username}, tell me about yourself! </Text>
            <TextInput
              onChangeText={onChangeAge}
              value={age}
              placeholder="How old are you?"
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