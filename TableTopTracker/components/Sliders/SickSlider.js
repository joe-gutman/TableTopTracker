import React, { useState } from 'react';
import { View, Text } from 'react-native';

// intuitive community Slider that I found
import Slider from '@react-native-community/slider';

// don't need to use, but this'll be the general format **
export default function SickSlider() {

  // arbitrary state
  const [ count, setCount ] = useState(30);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Count: { count }</Text>
      <Slider
        style={{ width: '50%' }} // <— adjust width **
        value={ count }
        onValueChange={ setCount }
        step={ 1 } // may not need to step for mobile interface (but who knows?)
        // arbitrary values
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