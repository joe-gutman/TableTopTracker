import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Portal, Modal } from 'react-native-paper';
import { handleOpenModal } from '../../state/modal/actions';
import { createCollection } from '../../util/api.js';

export default function CreateCollection({ gameToAdd, onClose }) {
  // const [ collections, setCollections ] = useState();
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

  const handleCreateCollection = (collectionName) => {
    createCollection(collectionName, user.id)
      .then(({ data }) => postGameToCollection(user.id, data.collection_name, gameToAdd.id))
      .then(({data}) => fetchUserCollections(user.id))
      .then(({data}) => {
        dispatch(handleReceiveCollections(data));
        dispatch(handleSetNotification(`Game added to ${selectedCollection}`));
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View>
      <TextInput
        style={ styles.textInput }
        placeholder='Collection Name'
        value={ collectionName }
        onChangeText={ setCollectionName }
      />
      {/* { error && (
        <Text style={ styles.errorText }>{ error }</Text>
      ) } */}
      <Pressable
        title='Create Collection'
        onPress={ handleCreateCollection }
        // disabled={ isLoading }
      >
        <Text>Submit</Text>
      </Pressable>
      {/* { isLoading && <Text>Loading...</Text> } */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  }
});