import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { FAB } from 'react-native-paper'; // <— ideal (need icon) **
import styles from './styles';

export default function ButtonList({ listTypes, selectedList, setSelectedList }) {
  return (
    <View style={ styles.container }>
      <ScrollView horizontal>
        { listTypes.map((list, i) => (
          <View style={ styles.buttonMargin }>
              <Button
                key={ list }
                title={ list }
                onPress={ () => setSelectedList(list) }
                style={[
                  styles.focusButton,
                  // apply selectedButton style when selectedList matches current
                  selectedList === list && styles.selectedButton,
                  // add right margin to all except last one
                  i !== (listTypes.length - 1) && styles.buttonMargin
                ]}
              />
          </View>
        )) }
      </ScrollView>
    </View>
  );
}