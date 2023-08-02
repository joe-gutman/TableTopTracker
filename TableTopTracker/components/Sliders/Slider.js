import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import House from "./House.js";
import Handle from "./Handle.js";

export default function Slider ({type, max}) {
  var handleElements = [];
  if (type === 'single') {
    var l = 150;
    var r = null;
    var initialLeftDisplay = max/2
    var initialRightDisplay = null;
  } else if (type === 'double') {
    var l = 75;
    var r = 225;
    var initialLeftDisplay = max * (75/300)
    var initialRightDisplay = max * (225/300)
  }

  const [handles, setHandles] = useState(handleElements);
  const [leftPosition, setLeftPosition] = useState(l)
  const [rightPosition, setRightPosition] = useState(r);
  const [active, setActive] = useState(false);
  const [range, setRange] = useState(range);
  const [leftDisplay, setLeftDisplay] = useState(initialLeftDisplay)
  const [rightDisplay, setRightDisplay] = useState(initialRightDisplay);
  const [leftPositionTracker, setLeftPositionTracker] = useState(initialLeftDisplay);
  const [rightPositionTracker, setRightPositionTracker] = useState(initialRightDisplay);

  useEffect(() => {
    console.log(type, 'in useEffect');
    if (type === 'single') {
      var leftFloat = max * (leftPositionTracker/300)
      console.log(leftFloat);
      setLeftDisplay(Number(leftFloat.toFixed(2)))
    } else if (type === 'double') {
      var leftFloat = max * (leftPositionTracker/300)
      var rightFloat = max * (rightPositionTracker/300)
      setLeftDisplay(Number(leftFloat.toFixed(2)))
      setRightDisplay(Number(rightFloat.toFixed(2)))
    }
  }, [leftPositionTracker, rightPositionTracker])

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  }
  const numberDisplays = {
    width: 10,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;
  return (
    <View style={biggestContainer}>
      <View style={numberDisplays}>
        {leftDisplay}
      </View>
      <View style={outerContainer}>
        <House leftPosition={leftPosition} setLeftPosition={setLeftPosition} rightPosition={rightPosition} setRightPosition={setRightPosition} active={active} leftPositionTracker={leftPositionTracker} rightPositionTracker={rightPositionTracker} setLeftPositionTracker={setLeftPositionTracker} setRightPosition={setRightPositionTracker} />
      </View>
      <View style={numberDisplays}>
        {rightDisplay}
      </View>
    </View>
  )
}