import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Draggable from 'react-native-draggable';

export default function Handle ({type}) {
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;
  return (
    <Draggable
      renderSize={15}
      renderColor='black'
      isCircle
      y={-4}
      x={150}
      minX={0}
      maxX={300}
      minY={-4}
      maxY={-4}
    />
  )
}