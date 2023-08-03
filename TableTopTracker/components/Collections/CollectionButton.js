import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../screens/stylesheets/collectionsStyles.js'

export default function CollectionButton({ collection }) {
  return (
    <View style={styles.cardBorder}>
      <View style={styles.cardMain}>
      </View>
      <Text style={styles.cardText}>{collection}</Text>
    </View>
  );
}