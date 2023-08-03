import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { FAB } from 'react-native-paper';
import styles from './styles';

export default function ButtonList({ collections, listType, setListType }) {
  return (
    <View style={ styles.container }>
      <ScrollView horizontal>
        { collections.map((collection, i) => (
          <View style={ styles.buttonMargin } key = { i }>
            <Button
              key={ collection }
              title={ collection }
              onPress={ () => setListType(collection) }
              style={[
                styles.focusButton,
                listType === collection && styles.focusButton,
                i !== (collections.length - 1) && styles.buttonMargin
              ]}
            />
          </View>
        )) }
      </ScrollView>
    </View>
  );
}