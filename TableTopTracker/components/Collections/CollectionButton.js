import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../screens/stylesheets/collectionsStyles.js'

const icons = {
  'My Games': require('../../assets/Asset-_Collection-House-White.png'),
  'Recommendations': require('../../assets/Asset-_NavBar-MagnifyingGlass-White.png'),
  'Liked': require('../../assets/Asset-_Collection-Heart-White.png'),
  'Wishlist': require('../../assets/Asset-_Collection-Star-White.png'),
  'Misc': require('../../assets/Asset-_NavBar-LifePerson-White.png'),
};

export default function CollectionButton({ collection }) {
  return (
    <View style={styles.cardBorder}>
      <View style={styles.cardMain}>
        <Image
          // default image for user-created collections is life person icon
          source={icons[collection] || icons['Misc']}
          style={{
          height: 50,
          width: 50,
        }}/>
      </View>
      <Text style={styles.cardText}>{collection}</Text>
    </View>
  );
}
