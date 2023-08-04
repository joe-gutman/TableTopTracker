
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

export function handleSetNotification(notification) {
  return {
    type: 'SET_NOTIFICATION',
    payload: {notification}
  }
}

export function handleRemoveNotification() {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}