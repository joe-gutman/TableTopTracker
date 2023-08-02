import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import House from "./House.js";
import Handle from "./Handle.js";

export default function Slider ({type}) {
  var handleElements = [];
  if (type === 'single') {
    handleElements = [[0, 100]]
  } else if (type === 'double') {
    handleElements = [[0, 100], [0, 100]]
  }
  const outerContainer = {
    width: 320,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
  const biggestContainer = {
    width: 320,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  }
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;
  return (
    <View style={biggestContainer}>
      <View style={outerContainer}>
        <House />
      </View>
    </View>
  )
}