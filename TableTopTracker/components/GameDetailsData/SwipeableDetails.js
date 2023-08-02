import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

const SwipeableDetails = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
    // <Animated.View
    //   style={{
    //     transform: [{translateX: pan.x}, {translateY: pan.y}],
    //   }}
    //   {...panResponder.panHandlers}
    //   >

    //   <Card style={styles.descriptionCard}>
    //     <Card.Title title={dummyGame.name} subtitle={dummyGame.secondaryName} />
    //       <Card.Content>
    //         <View style={styles.table}>
    //           <View style={styles.column}>
    //             <Text>{dummyGame.category.join(', ')}</Text>
    //             <Text>{(dummyGame.minPlayTime===dummyGame.maxPlayTime) ?
    //             (dummyGame.minPlayTime) :
    //             `${dummyGame.minPlayTime} - ${dummyGame.maxPlayTime}`} minutes
    //             </Text>
    //             <Text>Released: {dummyGame.year}</Text>
    //           </View>
    //           <View style={styles.column}>
    //             <Text>{
    //               // render player number or number range
    //               (dummyGame.minPlayers===dummyGame.maxPlayers)
    //               ? dummyGame.minPlayers
    //               : `${dummyGame.minPlayers} - ${dummyGame.maxPlayers}`}
    //               {((dummyGame.minPlayers===dummyGame.maxPlayers) && (dummyGame.minPlayers===1))
    //                 ? ` player`
    //                 : ` players`
    //               } </Text>
    //             <Text>Recommended Age: {dummyGame.age}</Text>
    //             <Text>Complexity: </Text>
    //           </View>
    //         </View>
    //       <Text>{dummyGame.description}</Text>
    //     </Card.Content>
    //   </Card>
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    borderWidth: 20,
    borderRadius: 20,
    backgroundColor: '#FBF5E7',
    borderColor: '#FBF5E7',
  },
  parentContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  descriptionCard: {
    position: 'absolute',
    bottom: '0',
    borderWidth: 20,
    borderRadius: 20,
    backgroundColor: '#FBF5E7',
    borderColor: '#FBF5E7',
  },
  imageCard: {
    height: 400,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 8,
    transform: 'rotate(2deg)',

  },
  table: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px'
  },
  column: {
    flex: 1,
  }
});

export default SwipeableDetails;