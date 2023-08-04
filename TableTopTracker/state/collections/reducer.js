export default function CollectionsReducer(state = {collections: null}, action) {

  switch(action.type) {

    case 'RECEIVE_COLLECTIONS':
      return {
        collections: action.payload.collections
      }

      break;

    default:
      return state;
  }
}