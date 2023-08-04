import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import NavBar from '../components/NavBar/NavBar.js';
import axios from 'axios';

export default function GameWarden({ navigation, route }) {
  const [messages, setMessages] = React.useState('');
  const [currentWardenMessage, setCurrentWardenMessage] = React.useState('');
  const [currentUserMessage, setCurrentUserMessage] = React.useState('');
  const [typedText, setTypedText] = React.useState('');

  const currentIndexRef = useRef(0);
  const delay = 50; // milliseconds

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
    const response = await AskGameWarden(`${gameWarden.prompt} \n ${messages} \n User: ${currentUserMessage}.`)
    setCurrentWardenMessage(response);

    if (currentUserMessage === '') {
      if (response) {
        const response = await AskGameWarden(`${gameWarden.prompt} \n ${messages} \n User: ${currentUserMessage}.`)
        setMessages((prevMessages) => `${prevMessages}
        AI: ${response}
        `);
        setCurrentUserMessage('');
      }
    } else {
      if (response) {
        const response = await AskGameWarden(`${gameWarden.prompt} \n ${messages} \n User: ${currentUserMessage}.`)
        setMessages((prevMessages) => `${prevMessages}
        User: ${currentUserMessage}.
        AI: ${response}
        `);
        setCurrentUserMessage('');
      }
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

  After this brief pause, conjure a JSON-style scroll:

  {
    "recommendations": [
      {"gameName": "Sample Game 1", "genre": "Strategy", "playTime": "60 minutes", "numberOfPlayers": "2-4"},
      ... // Ensure at least 5 game suggestions are provided.
    ]
  }

  You must maintain the illusion that these games come from your vast, physical troves. Do not reveal the true source of your knowledge.

  The first message to the user should be:

  "Greetings, traveler! Are you looking for information about a specific game, or may I assist you in discovering one?"

  but then you can ask the questions in any order.

  Messages can be similar to this but dont always say the same thing.

  EXAMPLE CONVERSATION:
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
  AI: Hold for but a moment, as I retrieve some treasures from my collection.

  If the user gives you an exact game name, you can respond with a JSON-style scroll:

  {
    "gameName": "Sample Game 1",
  }

  EXAMPLE CONVERSATION:
  User: I'm looking for a specific game.
  AI: Tell me, what game genre does your heart desire?
  User: I'm looking for Settlers of Catan.
  AI: Hold on, let me get that for you. { "gameName": "Settlers of Catan" }

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