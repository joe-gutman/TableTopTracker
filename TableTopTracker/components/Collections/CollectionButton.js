import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../screens/stylesheets/collectionsStyles.js'

export default function CollectionButton({ collection }) {
  return (
    <View style={styles.cardButton}>
      <Text>{collection}</Text>
    </View>
  );
}