import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, SafeAreaView, TouchableOpacity, Pressable, Image, ImageBackground } from 'react-native';

const icons = {
  'LogoVertical': require('../../assets/Asset-Logo-Vertical.png'),
};

export default function HeaderTitle({ navigation }) {
  return (
    <View style={{flexDirection: 'row', marginRight: 15}}>
      <View style={{justifyContent: 'center', flex: 1}}>
      </View>
      <View style={{flex: 1}}>
        <Image
          source={icons['LogoVertical']}
          style={{width: 100, height: 60, resizeMode: 'contain'}}
        />
      </View>
      <View style={{justifyContent: 'center', padding: 5, flex: 1}}>
      </View>
    </View>
  );

}

