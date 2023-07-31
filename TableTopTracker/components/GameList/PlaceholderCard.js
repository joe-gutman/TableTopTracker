import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

// placeholder card (to be replaced w/ GameDetails, probably)
export default function PlaceholderCard({
  title, minplayers, maxplayers, minplaytime, maxplaytime, complexity, year_published, description
}) {
  return (
    <View style={ styles.card }>
      <Card>
        <Card.Content>
          {/* layout based on wireframe + site */}
          <Text>{ minplayers } — { maxplayers } Players</Text>
          <Text>Play-Time: { minplaytime } — { maxplaytime } Min</Text>
          <Text>Complexity: { complexity }</Text>
          <Text>{ year_published }</Text>
          <Text>{ description }</Text>
        </Card.Content>

        <Card.Title>{ title }</Card.Title>
      </Card>
    </View>
  );
}