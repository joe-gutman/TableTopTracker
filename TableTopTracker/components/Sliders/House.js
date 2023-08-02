import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import Handle from "./Handle.js";

export default function House ({type, leftPosition, setLeftPosition, rightPosition, setRightPosition, active,leftPositionTracker, setLeftPositionTracker, rightPositionTracker, setRightPositionTracker}) {
  const sliderHouse = {
    height: '6px',
    width: '300px',
    borderRadius: '3px',
    backgroundColor: 'blue'
  }
  var handles = ['left'];
  if (rightPosition) {
    handles.push('right');
  }
  var counter = 0;
  return (
    <View style={sliderHouse} >
      {handles.map(handle => {
        counter++;
        return (
          <Handle key={counter} which={handle} leftPosition={leftPosition} setLeftPosition={setLeftPosition} rightPosition={rightPosition} setRightPosition={setRightPosition} active={active} leftPositionTracker={leftPositionTracker} rightPositionTracker={rightPositionTracker} setLeftPositionTracker={setLeftPositionTracker} setRightPosition={setRightPositionTracker}/>
        )}
      )}
    </View>
  )
}