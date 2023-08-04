
import axios from 'axios';

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

export function handleUpdateUser(newInfo) {
  return (dispatch) => {
    axios.put('http://localhost:3000/users/edit', newInfo)
      .then(({data}) => {
          console.log("success updating! ")
          handleSetUser(data)
      }).catch((err) => {
          console.error("failed to update: ", err)
      })
  }
}