import React, {useRef, useState} from 'react';
import {Animated, Image, PanResponder, Pressable, StyleSheet, View, ScrollView} from 'react-native';
import { Card, Text, BottomNavigation } from 'react-native-paper';
import {handleOpenModal} from "../../state/modal/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from './swipeableDetailsStyles.js'
import {handleAddGameToCollection} from "../../state/collections/actions";

const icons = {
  'LikeGame': require('../../assets/Asset-Collection-Heart-White.png'),
  'LikedGame': require('../../assets/Asset-Collection-Heart.png'),
};


const SwipeableDetails = ({game}) => {
  const dispatch = useDispatch();
  const collectionsState = useSelector(({collections}) => collections);
  const pan = useRef(new Animated.ValueXY()).current;
  const edgeSwipe = 50;
  const longDescription = (game.description.length > 1300);
  const [modal, setModal] = useState(false);
  const [tilePosition, setTilePosition] = useState(0);
  const [firstRendered, setFirstRendered] = useState(true);

  // console.log('game in swipeable details: ', game)

  if (firstRendered) {

    setFirstRendered(false);
    setTilePosition(1);
    setTimeout(
      () => {
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: -350}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: -350})
        });
      }, 500)
  }

  const panResponder = PanResponder.create({
    // onStartShouldSetPanResponder: (e, gestureState) => true;

    // allows module swiping depending on location of touch on module
    onMoveShouldSetPanResponderCapture: (e, gestureState) => {
      let isEdgeSwipe = (!tilePosition) // swipe up from any point of the module is in its lower position
        || (tilePosition && !longDescription) // swipe down from any point if short description + upper position
        || (tilePosition && (gestureState.moveY < 300)); // swipe down from top if scrollable description +  upper position
      return isEdgeSwipe;
    },

    onPanResponderMove: Animated.event([
      null,
      {
        dy: pan.y,
      },
    ]),

    onPanResponderRelease: (e, gestureState) => {
      if ((pan.y._value < -200 || gestureState.vy < 0) && (tilePosition === 0)) {

        setTilePosition(1);
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: -350}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: -350})
        });
      } else {

        setTilePosition(0);
        Animated.spring(
          pan,
          {toValue:{x: pan.x._value, y: 0- pan.y._offset}}
        ).start(() => {
            pan.setValue({x: 0, y: 0})
            pan.setOffset({x: 0, y: 0})
        });
      }

    }
  });

  function isLikedGame() {
    // console.log(collectionsState)
    for(let i = 0; i < collectionsState.collections['Liked'].length; i++) {
      // console.log(collectionsState.collections['Liked'][i]);
      if(collectionsState.collections['Liked'][i].id === game.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.tile]}
      >
        <View style={styles.edgeSwipeCue}/>
        <View style={styles.actionsRow}>
          <Pressable
            title="AddGameToCollection"
            onPress={() =>
              dispatch(handleOpenModal('ADD_TO_COLLECTION', {game}))
            }>

            <Text style={{fontSize: '50px'}}>+</Text>
          </Pressable>

          <Pressable
            title="LikeGame"
            style={
              isLikedGame()
              ? {...styles.actionBtn, ...styles.likedGameIcon}
              : styles.actionBtn
            }
            onPress={() => {
              if (!isLikedGame()) {
                dispatch(handleAddGameToCollection('Liked', game.id))
              }
            }}>
            <Image
              source={
                isLikedGame()
                  ? icons['LikedGame']
                  : icons['LikeGame']
              }
              style={styles.actionBtnIcon}/>
          </Pressable>
        </View>

        <Text style={styles.titleText}>{game.title}</Text>

        <View style={styles.table}>
            <View style={styles.column}>
              {/* <Text>{game.category.join(', ')}</Text> */}
              <Text>{(game.minplaytime===game.maxplaytime) ?
              (game.minplaytime) :
              `${game.minplaytime} - ${game.maxplaytime}`} minutes
              </Text>
              <Text>Released: {game.year_published}</Text>
            </View>
            <View style={styles.column}>
              <Text>{
                // render player number or number range
                (game.minplayers===game.maxplayers)
                ? game.minplayers
                : `${game.minplayers} - ${game.maxplayers}`}
                {((game.minPplayers===game.maxplayers) && (game.minplayers===1))
                  ? ` player`
                  : ` players`
                } </Text>
              <Text>Recommended Age: {game.age}</Text>
              <Text>Complexity: {game.complexity}</Text>
            </View>
          </View>
          <View style={styles.addToCollectionButtonContainer}>
            <Pressable
              style={styles.addToCollectionButton}
              onPress={() =>
                dispatch(handleOpenModal('ADD_TO_COLLECTION', {game}))}
            >
              <Text style={styles.addToCollectionText}>Add To Collection</Text>
            </Pressable>
          </View>
          {(tilePosition && longDescription)
            ? (<ScrollView style={styles.gameDescription}>
              <Text>{game.description}</Text>
            </ScrollView>)
            : <View style={styles.gameDescription}>
                <Text>{game.description}</Text>
              </View>
          }
      </Animated.View>
    </View>
  );
};

export default SwipeableDetails;