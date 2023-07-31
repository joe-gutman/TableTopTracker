import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Home ({navigation}) {
  return (
    <View>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />

      <Text>
        hello laddies
      </Text>

      <Button
        title="Go to Game Page"
        onPress={() =>
          navigation.navigate('Login', {name: 'TableTop'})
        }
      />
    </View>
  );
}