
export default function AppReducer(state = {loading: false, user: null, notification: null}, {type, payload}) {

  switch (type) {

    case 'SET_LOADING':
      return {
        ...state,
        loading: payload
      }

    case 'SET_USER':
      return {
        ...state,
        user: payload.user
      }

    case 'SET_NOTIFICATION':
      return {
        ...state,
        notification: payload.notification
      }

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notification: null
      }

    default:
      return state;
  }
}