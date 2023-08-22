import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, Image, ImageBackground } from 'react-native';

const icons = {
  'BackArrow': require('../../assets/Asset-TopNav-BackArrow.png'),
  'LogoVertical': require('../../assets/Asset-Logo-Vertical.png'),
};

export default function TopNav() {
  return (
    <View>
      <Image
        source={icons['BackArrow']}
        style={styles.NavButtons}
      />
      <Image
        source={icons['LogoVertical']}
        style={styles.NavButtons}
      />
    </View>
  );
}