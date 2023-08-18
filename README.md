# TableTop Tracker 🎮
### Your central hub for table-top games 🎲

## Overview 📝
TableTop Tracker helps table top gamers keep track of the games they have, the games they want, and games they need but don't know about yet. Users can create collections of games and add games to custom collections. If the user is itching for something new, they can talk to an AI-powered chatbot that will recommend games based on their preferences. 🤖

## For Developers: Basic Information and How to Get Started 🚀

### **Installation 💻**

1. Git clone the project's repository from GitHub to your local device.
2. In your CLI, cd to the TableTopTracker directory and run "npm run start".
3. In your CLI, cd to the Server directory and run "npm run server-dev".

### **Tech Stack 🛠️**
1. React Router
2. React Native
3. Javascript
4. PostgreSQL
5. Node / Express

### **APIs 🌐**
1. OpenAI — API
2. BoardGameGeek — API
3. FireBase/FireStore — Authentication

### **Styling Frameworks 🎨**
1. React Native Paper
2. Good ol' vanilla CSS

### **Git Flow 🌊**
1. Make your own branch 🌿
2. Before committing, make sure to pull from main to get the most up-to-date repository 🔄
3. Commit and push to the branch every time there is progress without any errors (after every feature is done) ✅
4. After submitting pull request, ask for approval from one other team member before merging into the main branch 👥

### **How to Run React Native 📱**
1. CD into TableTopTracker Directory
2. npx install yarn or brew install yarn
3. yarn install
4. npx expo start (should see a QR code)
5. To open on the web, enter 'w' after the expo start runs.
6. Download the expo go app on your phone and create an account
7. Scan the QR code that appears after running npx expo start

### **How to run the Server and database 🏢🗄️**

```
// cd into /Server

// run the following to create a postgresql database:

    > createdb tableTopGamers

// create .env in /server with the following

    .env---------------------
    DB_NAME=tableTopGamers
    -------------------------

// create tables in db

// from /server run:

    > psql -U [YOUR DB USERNAME] -d tableTopGamers -a -f database/schemaReset.sql

// from /server run:

    > node database/seedMockData.js
    > update: if you'd like some live data, run database/schemaReset.sql as above,
        uncomment the initializer.populateBoardGames() in index.js on line 18 and start
        up the server again.  as of right now it only runs through the first 9 entries
        of the board games list.  You can modify populate.js to run through 500 games,
        but do so at your own risk, I'm quite sure there are still a few bugs that need fixing.
```

**API END-POINTS**

PORT=3000

**fetch user collections**

GET /collections?userId=[USER_ID]

- Query Paramaters = userId

**fetch collection games**
GET /collections/:collectionId

- Req Paramaters = collectionId

## Team Members 👥
- https://github.com/joe-gutman (Project Manager)
- https://github.com/darien-poon
- https://github.com/andeliuliu (Architect)
- https://github.com/ayamagucci
- https://github.com/L-ren
- https://github.com/WarrenLynes
- https://github.com/victoriajquinto (UI Owner)
- https://github.com/mayedap

