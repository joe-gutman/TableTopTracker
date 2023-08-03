
export default function AppReducer(state = {loading: false, user: null}, {type, payload}) {

  switch (type) {

    case 'SET_LOADING':
      return {
        loading: payload
      }

    case 'SET_USER':
      return {
        ...state,
        user: payload.user
      }

    default:
      return state;
  }
}