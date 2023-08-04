import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

// NOTE: no longer named "PlaceholderCard"
export default function GameCard({
  handlePress,
  title, thumbnail, minplayers, maxplayers, minplaytime, maxplaytime, complexity, year_published, description
}) {

  return (
    <TouchableOpacity onPress={() => {
      // MISSING: category, image, age, gameId
      handlePress(title);
      }}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardGrid}>
          <View style={styles.thumbnailContainer}>
            <Image
              style={ styles.thumbnail } // needs to appear left of details
              source={{ uri: thumbnail }}
            />
          </View>
          <View>
            <Text>{ minplayers } - { maxplayers } Players</Text>
            <Text>Playtime: { minplaytime } - { maxplaytime } Min</Text>
            <Text>Complexity: { complexity }</Text>
            <Text>{ year_published }</Text>
            <Card.Title title={title}/>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}