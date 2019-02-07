import axios from "axios"

export const FETCHING = "FETCHING"
export const FETCHED = "FETCHED"
export const SAVING = "SAVING"
export const SAVED = "SAVED"
export const UPDATING = "UPDATING"
export const UPDATED = "UPDATED"
export const ERROR = "ERROR"
export const SHOW_FORM = "SHOW_FORM"

export function fetchFriends() {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get("http://localhost:5000/api/friends")
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't fetch your friends!" })
      })
  }
}

export function showForm(actionType, friend) {
  return { type: SHOW_FORM, actionType: actionType, currentFriend: friend }
}

export function addFriend(friend) {
  return dispatch => {
    dispatch({ type: SAVING })
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        dispatch({ type: SAVED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't add your friend!" })
      })
  }
}

export function updateFriend(id, friend) {
  return dispatch => {
    dispatch({ type: UPDATING })
    axios
      .put(`http://localhost:5000/api/friends/${id}`, friend)
      .then(response => {
        dispatch({ type: UPDATED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't update your friend!" })
      })
  }
}
