
export function handleSetLoading(status) {
  return {
    type: 'SET_LOADING',
    payload: status
  }
}

export function handleSetUser(user) {
  return {
    type: 'SET_USER',
    payload: {user}
  }
}