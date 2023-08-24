import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, Image, ImageBackground } from 'react-native';

const icons = {
  'LogoVertical': require('../../assets/Asset-Logo-Vertical.png'),
};

export default function TopNavLogoOnly() {
  return (
    <View>
      <Image
        source={icons['LogoVertical']}
        style={{ width: 100, height: 50, position: 'absolute', marginLeft: "50%", marginTop: 0, }}
      />
    </View>
  );
}