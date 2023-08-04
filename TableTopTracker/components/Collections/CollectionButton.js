import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import styles from '../../screens/stylesheets/collectionsStyles.js'

const icons = {
  'My Games': require('../../assets/Asset-Collection-House-White.png'),
  'Recommendations': require('../../assets/Asset-NavBar-MagnifyingGlass-White.png'),
  'Liked': require('../../assets/Asset-Collection-Heart-White.png'),
  'Wishlist': require('../../assets/Asset-Collection-Star-White.png'),
  'Misc': require('../../assets/Asset-NavBar-LifePerson-White.png'),
};

export default function CollectionButton({ collection, onSelect, listType }) {

  return (
    <Pressable
      style={(collection === listType) ? styles.selectedBorder : styles.cardBorder}
      onPress={() => onSelect(collection)}
    >
      <View
        style={(collection === listType) ? styles.selectedMain : styles.cardMain}
      >
        <Image
          // default image for user-created collections is life person icon
          source={icons[collection] || icons['Misc']}
          style={{
          height: 50,
          width: 50,
        }}/>
      </View>
      <Text
        style={styles.cardText}
      >
        {collection}
      </Text>
    </Pressable>
  );
}
