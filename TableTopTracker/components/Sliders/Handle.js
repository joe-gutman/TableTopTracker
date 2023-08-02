import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Draggable from 'react-native-draggable';

export default function Handle ({which, leftPosition, setLeftPosition, rightPosition, setRightPosition, active, leftPositionTracker, setLeftPositionTracker, rightPositionTracker, setRightPositionTracker}) {
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;
  var initialLeftPosition = leftPosition;
  var initialRightPosition = rightPosition;
  const handleDragRelease = (event, data) => {
    var { moveX, x0, dx, vx } = data;
    if (which === 'left') {
      var newPos = leftPosition + dx;
      if (newPos < 0) {
        newPos = 0;
      }
      setLeftPositionTracker(newPos);
      setLeftPosition(newPos);
    } else if (which === 'right') {
      var newPos = rightPosition + dx;
      if (newPos > 285) {
        newPos = 285;
      }
      setRightPositionTracker(newPos);
      setRightPosition(newPos)
    }
  }

  const handleDrag = (event, data) => {
    var { moveX, x0, dx, vx } = data;
    if (which === 'left') {
      var newPos = leftPosition + dx;
      if (newPos < 0) {
        newPos = 0;
      }
      setLeftPositionTracker(newPos);
    } else if (which === 'right') {
      var newPos = rightPosition + dx;
      if (newPos > 285) {
        newPos = 285;
      }
      setRightPositionTracker(newPos)
    }
  }

  return (
    <Draggable
      renderSize={15}
      renderColor={which === 'right' ? 'blue' : 'black'}
      onDrag={handleDrag}
      onDragRelease={handleDragRelease}
      isCircle
      disabled={active}
      y={-4}
      x={which === 'left'
        ? rightPosition !== null
          ? 75
          : 150
        : 225}
      minX={which === 'right' ? leftPosition : 0}
      maxX={which === 'left' && rightPosition !== null ? rightPosition : 300}
      minY={-4}
      maxY={-4}
    />
  )
}