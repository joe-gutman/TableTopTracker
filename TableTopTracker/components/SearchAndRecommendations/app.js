

// Game Warden

// Game warden greets user upon first load
// Game Warden Asks User if they are Looking for a Game or a Player
// Show Two Buttons: Game, Player

// If User Clicks Game
  // Game Warden Asks User if they are looking for a specific game or recommendations
  // Show Two Buttons: Specific Game, Recommendations
      // If User Clicks Specific Game
        // Game Warden Asks User to Enter Game Name
        // Show Input Field
      // If User Clicks Recommendations
        // Game Warden asks user a question about what they are looking for in a game
        // Show Input Field
          // add wardens question and user response into a list
          // send converstaion to ChatGPT and ask chatgpt if it has enough info to make a suggestion
          // if it does
            // tell user that it is ready to make a suggestion
            // show user suggestions
          // if it doesn't
            //ask another question
          // repeat until suggestions are shown
// if User Clicks Player
  // Game Warden Asks user to enter players name
  // Show Input Field
    // query database for all players
    // send players and user request to ChatGPT
    // have chatgpt return the best matches
    // show user the best matches
    // if user clicks on a match
      // show user the players profile

