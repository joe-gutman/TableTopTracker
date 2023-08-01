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


