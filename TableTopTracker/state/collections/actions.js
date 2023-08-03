
export function handleReceiveCollections(collections) {
  return {
    type: 'RECEIVE_COLLECTIONS',
    payload: {collections}
  }
}
