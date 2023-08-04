import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import axios from 'axios';
import { fetchGPTData } from '../util/api.js';
import GamesList from '../components/GameList/GamesList.js';

// import styles from './stylesheets/gameWarden.js';

export default function GameWarden({ navigation, route }) {
  const [messages, setMessages] = React.useState('');
  const [currentWardenMessage, setCurrentWardenMessage] = React.useState('');
  const [currentUserMessage, setCurrentUserMessage] = React.useState('');
  const [typedText, setTypedText] = React.useState('');
  const [gamesList, setGamesList] = React.useState([]);

  const currentIndexRef = useRef(0);
  const delay = 50; // milliseconds

  useEffect(() => {
    var games = {
      recommendations: [
        {"gameName":"The Settlers of Catan"},
        {"gameName":"Monopoly"}
      ]
    }
    fetchGPTData(games)
      .then((gamesData) => {
        console.log(gamesData);
        setGamesList(gamesData.data)
      })
      .catch((error) => {
        console.log(error.message);
      })
    // setGamesList(gamesData.data);
  }, [])

  useEffect(() => {
    handleUserMessageSubmit();
  }, []);

  useEffect(() => {
    currentIndexRef.current = 0;
    setTypedText('');
    if (currentWardenMessage.length > 0) {
      const timeout = setTimeout(updateCurrentText, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentWardenMessage]);

  const updateCurrentText = () => {
    if (currentIndexRef.current < currentWardenMessage.length) {
      const currentChar = currentWardenMessage.charAt(currentIndexRef.current);
      if (currentChar) {
        setTypedText((prevText) => prevText + currentChar);
      }
      currentIndexRef.current++;
      setTimeout(updateCurrentText, delay);
    }
  };

  const handleUserMessageSubmit = async () => {
    let userMessage = currentUserMessage ? `User: ${currentUserMessage}.` : '';
    let wardenMessage = currentWardenMessage ? `AI: ${currentWardenMessage}` : '';

    const response = await AskGameWarden(`${gameWarden.prompt} \n ${messages} \n ${userMessage}`);
    setCurrentWardenMessage(response);
    setMessages((prevMessages) => `${prevMessages}  \n ${userMessage} \n AI: ${response}`);
    setCurrentUserMessage('');

    let games = parseGPTResults(response);
    console.log(games);
    if(games) {
      let gamesData = await fetchGPTData(games);
      let cleanGamesData = [];

      for(let game of gamesData.data) {
        console.log(game);
        if(game) {
          cleanGamesData.push(game);
        }
      }

      console.log(cleanGamesData);
      setGamesList(cleanGamesData);
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  let { user } = route.params;

  return (
    <View>
      <Text>"Game Warden"</Text>

      <Text>{typedText}</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCurrentUserMessage(text)}
        value={currentUserMessage}
        onSubmitEditing={handleUserMessageSubmit} // When user submits their message
      />
      <NavBar navigation={navigation} user={user} />
      <GamesList
        handlePress={(game) => {
          navigation.navigate('Game Details', {user: user, game})
        }}
        games={ gamesList }
      />
    </View>
  );
}

const gameWarden = {
  name: 'Game Warden',
  prompt: `Embody the essence of the Game Warden, a wizardly and mythical guide inspired by a caring Dungeons & Dragons Dungeon Master. As the Game Warden, converse with users in a friendly, engaging tone, weaving your questions into a narrative journey. Your purpose is to guide users towards the perfect board game from a vast database.

  Engage the user by asking these pivotal questions:

  What realm of game genre are they seeking to explore?
  How many fellow adventurers will join them on this quest?
  Have they journeyed in similar board game lands before, and if so, which ones did they traverse?
  For how many hours or minutes do they wish their game quest to last?
  Once you've gathered these tales and insights, determine if the tapestry of their story is complete. If you have enough knowledge, end your inquiries and conjure a JSON object with the titles of board games that would fit their desires. If the tales are yet incomplete, continue your engaging dialogue until the narrative is whole.

  1. "Tell me, what game genre does your heart desire?"
  2. "How many adventurers shall partake in this quest?"
  3. "Which realms (games) have you already traversed?"
  4. "For how long do you wish to immerse in this new world?"

  The enchantment of the JSON object might appear as:

  json
  Copy code
  {
     "recommendations": [
        {
           "gameName": "Sample Game 1",
           "genre": "Strategy",
           "playTime": "60 minutes",
           "numberOfPlayers": "2-4"
        },
        {
           "gameName": "Sample Game 2",
           "genre": "Adventure",
           "playTime": "120 minutes",
           "numberOfPlayers": "3-6"
        }
     ]
  }
  Start by greeting the user and asking them what they would like:
  `
}

// const openAI_Key = "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";
const openAI_Key = "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";

const AskGameWarden = async (prompt) => {
  try {
    const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const headers = {
      Authorization: `Bearer ${openAI_Key}`,
      "Content-Type": "application/json",
    };

    const data = {
      prompt: prompt,
      max_tokens: 256,
    };

    const response = await axios.post(url, data, { headers });
    const gptResponse = response.data.choices[0].text;
    return gptResponse.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Error calling OpenAI API: " + error;
  }
};

const parseGPTResults = (gptStr) => {
  var status = false;
  var objectStr = '';
  var innerCounter = 0;
  for (var i = 0; i < gptStr.length; i++) {
    if (gptStr[i] === '{') {
      if (status === false) {
        status = true;
      } else {
        innerCounter++;
      }
    } else if (gptStr[i] === '}') {
      if (status === true && innerCounter === 0) {
        objectStr = objectStr + gptStr[i]
        return JSON.parse(objectStr);
      } else {
        innerCounter--;
      }
    }
    if (status) {
      objectStr = objectStr + gptStr[i];
    }
  }
}
