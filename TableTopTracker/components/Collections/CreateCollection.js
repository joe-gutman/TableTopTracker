import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Portal, Modal, Button} from 'react-native-paper';
import { handleOpenModal } from '../../state/modal/actions';
import {createCollection, fetchUserCollections, postGameToCollection} from '../../util/api.js';
import {handleReceiveCollections} from "../../state/collections/actions";
import {handleSetNotification} from "../../state/app/actions";
import theme from "../../theme";

export default function CreateCollection({ gameToAdd, onClose }) {

  const dispatch = useDispatch();
  const user = useSelector(state => state.app.user);

  const [ collectionName, setCollectionName ] = useState('');

  /*
    {
      "id": 4,
      "user_id": 1,
      "collection_name": null,
      "public": false
    }
  */

  const handleCreateCollection = () => {
    createCollection(collectionName, user.id)
      .then(({ data }) => postGameToCollection(user.id, data.collection_name, gameToAdd.id))
      .then(({ data }) => fetchUserCollections(user.id))
      .then(({ data }) => {
        dispatch(handleReceiveCollections(data));
        dispatch(handleSetNotification(`Game added to ${ collectionName }`));
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View>
      <TextInput
        style={ styles.textInputBox }
        placeholder='Collection Name'
        value={ collectionName }
        onChangeText={ setCollectionName }
      />

      <Button mode={"contained"} onPress={handleCreateCollection} style={styles.btn}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputBox: {
    ...theme.components.textInput,
    width: "auto"
  },

  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 19,
    height: 51,
    width: 259,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    marginTop: 10,
    color: 'white',
  }
});