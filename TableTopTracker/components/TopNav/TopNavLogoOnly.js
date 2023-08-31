import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, Image, ImageBackground } from 'react-native';

const icons = {
  'LogoVertical': require('../../assets/Asset-Logo-Vertical.png'),
};

export default function TopNavLogoOnly({ navigation }) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Image
        source={icons['LogoVertical']}
        style={{ width: 150, height: 75, resizeMode: 'contain', }}
      />
    </View>
  );

}


{/* <View>

</View> */}