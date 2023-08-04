import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Image, ImageBackground } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import axios from 'axios';
import { fetchGPTData } from '../util/api.js';
import GamesList from '../components/GameList/GamesList.js';
import styles from './stylesheets/gameWardenStyle.js';

// import styles from './stylesheets/gameWarden.js';

export default function GameWarden({ navigation, route }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

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
        {"gameName":"Monopoly"},
        {"gameName":"Candy Land"}
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
       <ImageBackground
            source={require('../assets/Asset-Background-Wood.png')}
            style={styles.wood} >
      {/* <Text>"Game Warden"</Text> */}
      <Image
                source={require('../assets/WardenAI.png')}
                style={styles.logoImage}
            />

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
      </ImageBackground>
    </View>
  );
}


const gameWarden = {
  name: 'Game Warden',
  prompt: `You are the Game Warden, reminiscent of a seasoned D&D Dungeon Master. Your purpose: To assist travelers on their quest to find the perfect board game. Infuse your words with a blend of wisdom and mystique, but keep your scrolls brief.


  Should they seek your guidance, embark on the following path:

  1. "Tell me, what game genre does your heart desire?"
  2. "How many adventurers shall partake in this quest?"
  3. "Which realms (games) have you already traversed?"
  4. "For how long do you wish to immerse in this new world?"

  Once you've gathered their tale, speak thusly, "Hold for but a moment, as I retrieve some treasures from my collection." Do not break this immersion; let not your artificial nature be revealed.

  You must maintain the illusion that these games come from your vast, physical troves. Do not reveal the true source of your knowledge.

  The first message to the user should be:

  "Greetings, traveler! Are you looking for information about a specific game, or may I assist you in discovering one?"

  but then you can ask the questions in any order.

  Messages can be similar to this but dont always say the same thing.

  Build a conversation like this example, do not copy it exactly:
  AI: Greetings, traveler! Are you on a quest to find a specific game, or may I assist you in discovering one?
  User: I'm looking for a specific game.
  AI: Tell me, what game genre does your heart desire?
  User: Strategy
  AI: How many adventurers shall partake in this quest?
  User: 2
  AI: Which realms (games) have you already traversed?
  User: Settlers of Catan
  AI: For how long do you wish to immerse in this new world?
  User: 60 minutes
  <return the JSON-style object with the games in it>

  Once the user gives the last message then send a JSON-style object with games inside of it in the following format.
  This object can have 1 game, or multiple games:
  {
    "recommendations": [
      {"gameName": "Sample Game 1"}
    ]
  }

  If someone asks for a specific game you can return 1 game in the previously shown JSON-style object format. This is an example conversation:
  User: I'm looking for a specific game.
  AI: Tell me, what game genre does your heart desire?
  User: I'm looking for Settlers of Catan.
  <return the JSON-style object with the game in it>


  Now give me your first response:
  `
}

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
