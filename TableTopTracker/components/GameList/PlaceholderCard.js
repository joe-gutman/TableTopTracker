import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles.js';

// placeholder card (to be replaced w/ GameDetails, probably)
export default function PlaceholderCard({ title, minplaytime, maxplaytime, complexity, year_published, description }) {
  return (
    <View style={ styles.card }>
      <Card>
        <Card.Title>{ title }</Card.Title>

        <Card.Content>
          {/* layout based on wireframe */}
          <Text>Play Time: { minplaytime } — { maxplaytime } Min</Text>
          <Text>Complexity: { complexity }</Text>
          <Text>{ year_published }</Text>
          <Text>{ description }</Text>
        </Card.Content>
      </Card>
    </View>
  );
}