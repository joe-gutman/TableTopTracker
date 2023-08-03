import React, { useState } from 'react';
import { View, Text } from 'react-native';

// intuitive community Slider that I found
import Slider from '@react-native-community/slider';

// feel free to not use, but this'll be the general format **
export default function SickSlider() {

  // arbitrary state
  const [ count, setCount ] = useState(30);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Count: { count }</Text>
      <Slider
        style={{ width: '90%' }} // <— adjust width **
        value={ count }
        onValueChange={ setCount }
        // step={ 10 }
        // Idk, probably don't need to step for mobile interface
        minimumValue={ 10 }
        maximumValue={ 50 }
      />
    </View>
  );
}

/*
(original MVP layout for reference)

// MUI components
<Box sx={{
  display: 'flex',
  margin: 'auto',
  width: '15rem'
}}>
  <Slider
    getAriaValueText={ (val) => `Count: ${ val }` }
    valueLabelDisplay="auto"
    value={ count }
    onChange={ changeCount }
    step={ 10 }
    min={ 10 }
    max={ 50 }
    marks={ marks }
  />
</Box>
*/