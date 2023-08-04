import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import styles from '../../screens/stylesheets/collectionsStyles.js'

export default function CollectionButton({ collection, onSelect }) {
  console.log(collection);
  return (
    <Pressable style={styles.cardBorder} onPress={() => onSelect(collection)}>
      <View style={styles.cardMain}>
      </View>
      <Text style={styles.cardText}>{collection}</Text>
    </Pressable>
  );
}