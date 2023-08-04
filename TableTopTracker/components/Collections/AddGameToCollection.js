import React, {useEffect, useState} from "react";
import {Alert, View, Pressable, StyleSheet, Picker} from 'react-native';
import {Portal, Modal, Text} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCollections, postGameToCollection} from "../../util/api";
import {SelectList} from "react-native-dropdown-select-list";
import {handleOpenModal} from "../../state/modal/actions";

export default function AddGameToCollection({game, onClose}) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);
  const {collections} = useSelector(state => state.collections);
  const [selectedCollection, setSelectedCollection] = useState(null);


  console.log(game);

  /*useEffect(() => {
    fetchUserCollections(user.id)
      .then(({data}) => {
        setCollections(data);
      })
  }, [])*/

  function submit() {
    postGameToCollection(selectedCollection, game.id)
  }

  function handleCreateCollection() {
    dispatch(handleOpenModal('CREATE_COLLECTION', {gameTOAdd: game}))
  }

  console.log(collections)

  return collections ? (
    <>
      <SelectList
        data={
          Object.keys(collections)
            .map((key) => ({key, value: key}))
        }
        setSelected={(selectedItem) => setSelectedCollection(selectedItem)}
        save='key'
        placeholder="Select Collection"
        search = {false}
        boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10 }}
        dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10 }}
      />

      <Pressable onPress={handleCreateCollection}>
        Create New Collection
      </Pressable>
    </>
  ) : <Text> Loading </Text>
}


const styles = StyleSheet.create({

});
