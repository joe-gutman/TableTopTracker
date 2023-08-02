import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Handle from "./Handle.js";

export default function House ({type}) {
  const sliderHouse = {
    height: '6px',
    width: '300px',
    borderRadius: '3px',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <View style={sliderHouse} >
      <Handle />
    </View>
  )
}