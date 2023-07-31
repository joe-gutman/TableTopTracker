import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button({ listTypes, selectedList, setSelectedList }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      { listTypes.map((list) => (
        <TouchableOpacity
          key={ list }
          onPress={ () => setSelectedList(list) }
          style={[
            styles.focusButton,
            // apply selectedButton style when selectedList matches current
            selectedList === list && styles.selectedButton
          ]}
        >
          <Text style={{ color: 'white' }}>{ list }</Text>
        </TouchableOpacity>
      )) }
    </View>
  );
}