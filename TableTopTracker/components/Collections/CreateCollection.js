import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Portal, Modal } from 'react-native-paper';
import { handleOpenModal } from '../../state/modal/actions';

export default function CreateCollection({ gameToAdd, onClose }) {
  // const [ collections, setCollections ] = useState();
  const dispatch = useDispatch();
  const user = useSelector(state => state.app.user);

  const [ collectionName, setCollectionName ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  // function for simulating addition
  const addCollectionToDB = async(collectionName, gameToAdd) => {
    // simulate async API call via timeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 123, collection_name: collectionName });
      }, 1000);
    });
  };

  const handleCreateCollection = async() => {
    if (collectionName.trim() === '') {
      setError('Collection name cannot be empty');
      return;
    }

    // assumes no error (since passed return)
    setError(null);
    setIsLoading(true); // display load text/animation

    try {
      // call API function to add collection to DB
      const newCollection = await addCollectionToDB(
        collectionName, gameToAdd
      );

      // redux magic to dispatch action to update state w/ new collection data
      /*
      dispatch(
        handleCreateCollection('CREATE_COLLECTION')
      );
      */

      // log added collection for now
      console.log(`Added collection: ${ newCollection }`);

      // close modal
      onClose();

    } catch(err) {
      setError(`Failed to add collection to DB: ${ err.message }`);

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View>
      <TextInput
        style={ styles.textInput }
        placeholder='Collection Name'
        value={ collectionName }
        onChangeText={ setCollectionName }
      />
      { error && (
        <Text style={ styles.errorText }>{ error }</Text>
      ) }
      <Pressable
        title='Create Collection'
        onPress={ handleCreateCollection }
        disabled={ isLoading }
      />
      { isLoading && <Text>Loading...</Text> }
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