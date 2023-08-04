import React, {useState} from "react";
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCollections, postGameToCollection} from "../../util/api";
import {SelectList} from "react-native-dropdown-select-list";
import {handleOpenModal} from "../../state/modal/actions";
import {handleReceiveCollections} from "../../state/collections/actions";
import {handleSetNotification} from "../../state/app/actions";
import theme from "../../theme";

export default function AddGameToCollection({game, onClose}) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);
  const {collections} = useSelector(state => state.collections);
  const [selectedCollection, setSelectedCollection] = useState(null);

  console.log(collections, game)

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
    dispatch(handleOpenModal('CREATE_COLLECTION', {gameToAdd: game}))
  }

  const _collections = {};
  Object.keys(collections).forEach((coll) => {
    let found = false;
    for(let x = 0; x < collections[coll].length; x++) {
      if(collections[coll][x].id === game.id) {
        found = true;
      }
    }

    if(!found) {
      _collections[coll] = collections[coll];
    }
  })

  return _collections ? (
    < >
      <SelectList
        data={
          Object.keys(_collections)
            .map((key) => ({key, value: key}))
        }
        setSelected={(selectedItem) => setSelectedCollection(selectedItem)}
        save='key'
        placeholder="Select Collection"
        search = {false}
        boxStyles={{ backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10 }}
        dropdownStyles = {{backgroundColor: '#FFF5DD', padding: 10, marginBottom: 10 }}
      />

      <Button mode={"contained"} onPress={handleSubmit} style={styles.btn}>
        Add To Collection
      </Button>

      <Button mode={"contained"} onPress={handleCreateCollection} style={styles.btn}>
        Create New Collection
      </Button>

    </>
  ) : <Text> Loading </Text>
}


const styles = StyleSheet.create({
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
