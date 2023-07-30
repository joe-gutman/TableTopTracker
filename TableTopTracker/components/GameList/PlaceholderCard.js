import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

// placeholder card (to be replaced w/ GameDetails, probably)
const PlaceholderCard = ({ title, playtime, complexity, year, description }) => (

  <View style={{ marginBottom: 10 }}>
    <Card>
      <Card.Title>{ title }</Card.Title>

      <Card.Content>
        <Text>Play Time: { playtime } hrs</Text>
        <Text>Complexity: { complexity }</Text>
        <Text>{ year }</Text>
        <Text>{ description }</Text>
      </Card.Content>
    </Card>
  </View>
);

export default PlaceholderCard;