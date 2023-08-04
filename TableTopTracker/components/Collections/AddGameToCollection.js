import React, {useState} from "react";
import {Pressable, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCollections, postGameToCollection} from "../../util/api";
import {SelectList} from "react-native-dropdown-select-list";
import {handleOpenModal} from "../../state/modal/actions";
import {handleReceiveCollections} from "../../state/collections/actions";
import {handleSetNotification} from "../../state/app/actions";

export default function AddGameToCollection({game, onClose}) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);
  const {collections} = useSelector(state => state.collections);
  const [selectedCollection, setSelectedCollection] = useState(null);

  function handleSubmit() {
    postGameToCollection(user.id, selectedCollection, game.id)
      .then(({data}) => fetchUserCollections(user.id))
      .then(({data}) => {
        dispatch(handleReceiveCollections(data));
        dispatch(handleSetNotification(`Game added to ${selectedCollection}`));
        onClose();
      })
      .catch((err) => {
        console.error(err);
      })
  }

  function handleCreateCollection() {
    dispatch(handleOpenModal('CREATE_COLLECTION', {gameTOAdd: game}))
  }

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

      <Pressable onPress={handleSubmit}>
        <Text>Add Collection</Text>
      </Pressable>

      <Pressable onPress={handleCreateCollection}>
        <Text>Create New Collection</Text>
      </Pressable>
    </>
  ) : <Text> Loading </Text>
}


const styles = StyleSheet.create({

});
