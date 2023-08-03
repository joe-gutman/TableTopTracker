import React, { useState, useEffect } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';
import House from "./House.js";
import Handle from "./Handle.js";

export default function Slider ({name, max, values}) {
  console.log(values);
  var l = 150;
  if (values === 'float') {
    var initialLeftDisplay = max/2
  } else {
    var initialLeftDisplay = Math.ceil(max/2);
  }

  const [leftPosition, setLeftPosition] = useState(l);
  const [active, setActive] = useState(false);
  const [range, setRange] = useState(range);
  const [leftDisplay, setLeftDisplay] = useState(initialLeftDisplay)


  // what is the idea behind the right display? we calculate the left display based on the max place the left handle can go to, which is 270, then we calculate the right display based on the distance from the left display;
  useEffect(() => {
    if (values === 'float') {
      var leftFloat = max * (leftPosition/300)
      setLeftDisplay(Number(leftFloat.toFixed(2)))
    } else {
      var leftFloat = max * (leftPosition/300)
      if (leftFloat === 0) {
        setLeftDisplay(1);
      } else {
        setLeftDisplay(Math.ceil(leftFloat))
      }
    }
  }, [leftPosition])

  const outerContainer = {
    width: 320,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
  const biggestContainer = {
    width: 410,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  }
  const numberDisplays = {
    width: 30,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
  // we probably need some other data on these handle elements; starting position, bounds for the draggable portion;
  return (
    <View style={biggestContainer}>
      <View style={numberDisplays} >
        <CheckBox
          value={active}
          onValueChange={setActive}
        />
      </View>

      <View style={numberDisplays}>
        {leftDisplay}
      </View>
      <View style={outerContainer}>
        <House leftPosition={leftPosition} setLeftPosition={setLeftPosition} active={active} />
      </View>
    </View>
  )
}