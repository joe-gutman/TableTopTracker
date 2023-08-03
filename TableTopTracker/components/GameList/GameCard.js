import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

// NOTE: no longer named "PlaceholderCard"
export default function GameCard({
  title, thumbnail, minplayers, maxplayers, minplaytime, maxplaytime, complexity, year_published, description
}) {

  return (
    <View style={ styles.card }>
      <Card>
        <Card.Content>
          {/* layout based on wireframe + site */}
          <Image
            style={ styles.thumbnail } // needs to appear left of details
            source={{ uri: thumbnail }}
          />
          <Text>{ minplayers } — { maxplayers } Players</Text>
          <Text>Play-Time: { minplaytime } — { maxplaytime } Min</Text>
          <Text>Complexity: { complexity }</Text>
          <Text>{ year_published }</Text>
          {/* <Text>{ description }</Text> */}
        </Card.Content>

        {/* not rendering title for some reason (suspect naming convention) */}
        <Card.Title>{ title }</Card.Title>
      </Card>
    </View>
  );
}