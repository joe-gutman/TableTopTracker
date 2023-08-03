import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Draggable from 'react-native-draggable';

export default function Handle ({leftPosition, setLeftPosition, active }) {
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;

  const handleDragRelease = (event, data) => {
    var { moveX, x0, dx, vx } = data;
    var newPos = leftPosition + dx;
    if (newPos < 0) {
      newPos = 0;
    } else if (newPos > 300) {
      newPos = 300;
    }
    setLeftPosition(newPos);
  }

  return (
    <Draggable
      renderSize={15}
      renderColor={active ? 'black' : 'gray'}
      onDragRelease={handleDragRelease}
      isCircle
      disabled={!active}
      y={-4}
      x={142}
      minX={0}
      maxX={300}
      minY={-4}
      maxY={-4}
    />
  )
}