import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Handle from "./Handle.js";

export default function House ({leftPosition, setLeftPosition, active}) {
  const sliderHouse = {
    height: '6px',
    width: '300px',
    borderRadius: '3px',
    backgroundColor: 'gray',
    zIndex: -2
  }
  return (
    <View style={sliderHouse} >
      <Handle leftPosition={leftPosition} setLeftPosition={setLeftPosition} active={active} />
    </View>
  )
}