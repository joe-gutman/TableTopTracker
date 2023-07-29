{/* <boardgames termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
                        <boardgame objectid="2129">
                        <name primary="true">Crossbows and Catapults</name>
                                                    <yearpublished>1983</yearpublished>
                                        </boardgame>
        </boardgames> */}

exports.parseSearchExactGameResults = (xml, title) => {
  var result = {
    title: title,
    boardgameId: null,
    year_published: null
  }
  var idLocation = xml.indexOf('objectid')
  var cut = xml.slice(idLocation, xml.length);
  var objectid = '';
  var inParenthesis = false;
  var count = 0;
  for (var i = 0; i < cut.length; i++) {
    if (inParenthesis) {
      objectid = objectid + cut[i];
    }
    if (cut[i] === '"') {
      count++;
      inParenthesis = !inParenthesis;
    }
    if (count > 1) {
      break;
    }
  }
  objectid = objectid.slice(0, objectid.length - 1)
  result.boardgameId = parseInt(objectid);
  var yearPublished = exports.findDataPoint(xml, '<yearpublished>')
  result.year_published = parseInt(yearPublished);
  return result;
}

exports.findDataPoint = (xml, tag) => {
  var location = xml.indexOf(tag);
  var inBetweenCarrots = false;
  cut = xml.slice(location, xml.length);
  count = 0;
  var dataPoint = '';
  for (var i = 0; i < cut.length; i++) {
    if (cut[i] === '<' && count === 1) {
      break;
    }
    if (inBetweenCarrots) {
      dataPoint = dataPoint + cut[i];
    }
    if (cut[i] === '>') {
      inBetweenCarrots = true;
      count++;
    }
  }
  return dataPoint;
}

exports.findAllInstancesOfDataPoint = (xml, tag) => {
  var location = xml.indexOf(tag);
  var results = [];
  while (location !== -1) {
    results.push(exports.findDataPoint(xml, tag));
    var xml = xml.slice(location + 1, xml.length)
    location = xml.indexOf(tag);
  }
  return results;
}



        // <boardgames termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
        //                                 <boardgame objectid="2129">
        //                 <yearpublished>1983</yearpublished>
        //                 <minplayers>2</minplayers>
        //                 <maxplayers>2</maxplayers>
        //                 <playingtime>30</playingtime>
        //                 <minplaytime>30</minplaytime>
        //                 <maxplaytime>30</maxplaytime>
        //                 <age>6</age>

        //                                             <name  sortindex="1">Barbarernas sista kamp</name>
        //                                             <name  sortindex="1">Castelli Catapulte Cavalieri</name>
        //                                             <name primary="true" sortindex="1">Crossbows and Catapults</name>
        //                                             <name  sortindex="1">Donjons et catapultes</name>
        //                                             <name  sortindex="1">Donjons et Catapultes</name>
        //                                             <name  sortindex="1">Κάστρα και πολιορκητές</name>
        //                                             <name  sortindex="1">Κάστρα και Πολιορκητές:Πολιορκία</name>

        //                 <description>Players build a wall of plastic bricks to protect their fort, then alternate turns shooting the walls down using ballistae (&amp;quot;crossbows&amp;quot;) and plastic discs, or by lobbing discs over the wall with the catapult.  Various scenarios and victory conditions can be made.&lt;br/&gt;&lt;br/&gt;</description>

        //                                             <thumbnail>https://cf.geekdo-images.com/mdKT26Tqy1MLoNhsVXvCnQ__thumb/img/4bVvYSBu4Y3_rxNJ2cBsQI96DMI=/fit-in/200x150/filters:strip_icc()/pic4854146.png</thumbnail>
        //                         <image>https://cf.geekdo-images.com/mdKT26Tqy1MLoNhsVXvCnQ__original/img/_r6AqyK7gdkhhbHncsBbdfgvzIQ=/0x0/filters:format(png)/pic4854146.png</image>

        //                                             <boardgamecategory objectid="1032">Action / Dexterity</boardgamecategory>
        //                                             <boardgamepublisher objectid="404">Alga</boardgamepublisher>
        //                                             <boardgamepublisher objectid="462">Base Toys</boardgamepublisher>
        //                                             <boardgameimplementation objectid="30328">Battleground: Crossbows &amp; Catapults</boardgameimplementation>
        //                                             <boardgamecategory objectid="1041">Children&#039;s Game</boardgamecategory>
        //                                             <boardgamesubdomain objectid="4665">Children&#039;s Games</boardgamesubdomain>
        //                                             <boardgameimplementation objectid="390612">Crossbows &amp; Catapults: Castle Battle</boardgameimplementation>
        //                                             <boardgameimplementation objectid="342075">Crossbows &amp; Catapults: Fortress War</boardgameimplementation>
        //                                             <boardgameexpansion objectid="9648">Crossbows and Catapults Battling Giants: Cyclops and Minotaur</boardgameexpansion>
        //                                             <boardgameexpansion objectid="9645">Crossbows and Catapults: Battering Ram</boardgameexpansion>
        //                                             <boardgameexpansion objectid="9659">Crossbows and Catapults: Castle Outposts</boardgameexpansion>
        //                                             <boardgameexpansion objectid="39085">Crossbows and Catapults: Chariots Battleset</boardgameexpansion>
        //                                             <boardgameexpansion objectid="9660">Crossbows and Catapults: Dragon</boardgameexpansion>
        //                                             <boardgameexpansion objectid="19156">Crossbows and Catapults: Dragon Battle Set</boardgameexpansion>
        //                                             <boardgameexpansion objectid="78779">Crossbows and Catapults: Grand Battleset</boardgameexpansion>
        //                                             <boardgameexpansion objectid="19157">Crossbows and Catapults: Sea Battle Set</boardgameexpansion>
        //                                             <boardgameexpansion objectid="128413">Crossbows and Catapults: Trojan Battleset</boardgameexpansion>
        //                                             <boardgameexpansion objectid="9647">Crossbows and Catapults: Trojan Horse and Battle Shield</boardgameexpansion>
        //                                             <boardgameversion objectid="44445">English edition</boardgameversion>
        //                                             <boardgamepodcastepisode objectid="200391">Ep 053 – LIVE!! @ New World Gaming</boardgamepodcastepisode>
        //                                             <boardgamepodcastepisode objectid="266648">Episode 15 Skyward and Crossbows and Catapults</boardgamepodcastepisode>
        //                                             <boardgamepodcastepisode objectid="242328">Episode 26 – Crosshairs and Justice!</boardgamepodcastepisode>
        //                                             <boardgameversion objectid="211020">French edition</boardgameversion>
        //                                             <boardgamedesigner objectid="104857">Ray Frigard</boardgamedesigner>
        //                                             <boardgamefamily objectid="6970">Game: Crossbows and Catapults</boardgamefamily>
        //                                             <boardgamepublisher objectid="940">Gay-Play</boardgamepublisher>
        //                                             <boardgamepublisher objectid="13103">El Greco</boardgamepublisher>
        //                                             <boardgameversion objectid="402427">Greek edition</boardgameversion>
        //                                             <boardgamepublisher objectid="11548">Harbert</boardgamepublisher>
        //                                             <boardgamepublisher objectid="152">Lakeside</boardgamepublisher>
        //                                             <boardgamecategory objectid="1035">Medieval</boardgamecategory>
        //                                             <boardgamepodcastepisode objectid="5680">OBG 27: Monopoly and More</boardgamepodcastepisode>
        //                                             <boardgamefamily objectid="61979">Players: Two Player Only Games</boardgamefamily>
        //                                             <boardgamedesigner objectid="159">Henri Sala</boardgamedesigner>
        //                                             <boardgameversion objectid="351905">Swedish edition</boardgameversion>
        //                                             <boardgamepublisher objectid="1322">Tomy</boardgamepublisher>

        //                 <poll name="suggested_numplayers" title="User Suggested Number of Players" totalvotes="5">

        //         <results numplayers="1">
        //                                 <result value="Best" numvotes="0" />
        //                                 <result value="Recommended" numvotes="0" />
        //                                 <result value="Not Recommended" numvotes="5" />
        //                         </results>

        //         <results numplayers="2">
        //                                 <result value="Best" numvotes="5" />
        //                                 <result value="Recommended" numvotes="0" />
        //                                 <result value="Not Recommended" numvotes="0" />
        //                         </results>

        //         <results numplayers="2+">
        //                                 <result value="Best" numvotes="0" />
        //                                 <result value="Recommended" numvotes="1" />
        //                                 <result value="Not Recommended" numvotes="3" />
        //                         </results>
        // </poll>

        //                 <poll name="language_dependence" title="Language Dependence" totalvotes="2">

        //         <results>
        //                                 <result level="1" value="No necessary in-game text" numvotes="2" />
        //                                 <result level="2" value="Some necessary text - easily memorized or small crib sheet" numvotes="0" />
        //                                 <result level="3" value="Moderate in-game text - needs crib sheet or paste ups" numvotes="0" />
        //                                 <result level="4" value="Extensive use of text - massive conversion needed to be playable" numvotes="0" />
        //                                 <result level="5" value="Unplayable in another language" numvotes="0" />
        //                         </results>
        // </poll>

        //                 <poll name="suggested_playerage" title="User Suggested Player Age" totalvotes="2">
        //                 <results>
        //                                 <result value="2" numvotes="0" />
        //                                 <result value="3" numvotes="0" />
        //                                 <result value="4" numvotes="0" />
        //                                 <result value="5" numvotes="2" />
        //                                 <result value="6" numvotes="0" />
        //                                 <result value="8" numvotes="0" />
        //                                 <result value="10" numvotes="0" />
        //                                 <result value="12" numvotes="0" />
        //                                 <result value="14" numvotes="0" />
        //                                 <result value="16" numvotes="0" />
        //                                 <result value="18" numvotes="0" />
        //                                 <result value="21 and up" numvotes="0" />
        //                         </results>
        // </poll>




        //                                         <statistics page="1">
        //                                             <ratings >
        //                                 <usersrated>784</usersrated>
        //                                 <average>6.6093</average>
        //                                 <bayesaverage>5.76733</bayesaverage>

        //                                 <ranks>

        //                                             <rank type="subtype" id="1" name="boardgame" friendlyname="Board Game Rank" value="4510" bayesaverage="5.76733" />


        //                                             <rank type="family" id="4665" name="childrensgames" friendlyname="Children&#039;s Game Rank" value="126" bayesaverage="6.06872" />

        //                                             </ranks>

        //                                 <stddev>1.66181</stddev>
        //                                 <median>0</median>
        //                                 <owned>763</owned>
        //                                 <trading>32</trading>
        //                                 <wanting>83</wanting>
        //                                 <wishing>213</wishing>
        //                                 <numcomments>323</numcomments>
        //                                 <numweights>71</numweights>
        //                                 <averageweight>1.2958</averageweight>
        //                         </ratings>
        //                                             </statistics>



        //         </boardgame>
        // </boardgames>
