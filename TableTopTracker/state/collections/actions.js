import {handleSetNotification} from "../app/actions";
import {fetchUserCollections, postGameToCollection} from "../../util/api";

export function handleReceiveCollections(collections) {
  return {
    type: 'RECEIVE_COLLECTIONS',
    payload: {collections}
  }
}
export function handleAddCollection(collectionName) {
  return {
    type: 'ADD_COLLECTION',
    payload: {collectionName: []}
  }
}


export function handleAddGameToCollection(selectedCollection, gameId, cb) {
  return (dispatch, getState) => {
    const state = getState();
    const userId = state.app.user.id;
    console.log(userId, selectedCollection, gameId);
    postGameToCollection(userId, selectedCollection, gameId)
    .then(({data}) => fetchUserCollections(userId))
    .then(({data}) => {
      dispatch(handleReceiveCollections(data));
      dispatch(handleSetNotification(`Game added to ${selectedCollection}`));
      cb();
    })
    .catch((err) => {
      console.error(err);
    })
  }
}

export function handleLikeGame(gameId) {

}

