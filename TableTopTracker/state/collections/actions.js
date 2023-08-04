
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
