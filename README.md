# TableTop-Collection

**Git Flow**
1. Make your own branch
2. Before committing, make sure to pull from main to get the most up-to-date repository
3. Commit and push to the branch every time there is progress without any errors (after every feature is done)
4. After submitting pull request, ask for approval from one other teammembers before merging into main branch

**Tech Stack**
1. React Router
2. React Native
3. Javascript
4. PostgreSQL
5. Node / Express

**APIs**
1. OpenAI — API
2. BoardGameGeek — API
3. FireBase/FireStore — Authentication

**Styling Framework**
1. React Native Paper
2. Bootstrap
3. Tailwind
4. Styled components

**How to Run React Native**
1. CD into TableTopTracker Directory
2. npx install yarn or brew install yarn
3. yarn install
4. npx expo start (should see a QR code)
5. To open on web, enter 'w' after the expo start runs.
6. Download the expo go app on your phone and create an account
7. Scan QR code that appears after running npx expo start


**How to run the Server and database**

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
    > update: if you'd like some live data, run database/schemaReset.sql as above, uncomment the initializer.populateBoardGames() in index.js on line 18 and start up the server again.  as of right now it only runs through the first 9 entries of the board games list.  You can modify populate.js to run through 500 games, but do so at your own risk, I'm quite sure there are still a few bugs that need fixing.
```

**API END-POINTS**

PORT=3000

### fetch user collections

GET /collections?userId=[USER_ID]

- Query Paramaters = userId

### fetch collection games
GET /collections/:collectionId

- Req Paramaters = collectionId