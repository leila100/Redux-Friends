import {
  FETCHING,
  FETCHED,
  ERROR,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  SHOW_FORM
} from "../actions"

const initialState = {
  showForm: "",
  currentFriend: {},
  fetching: false,
  saving: false,
  updating: false,
  deleting: false,
  friends: [],
  error: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCHED:
      return {
        ...state,
        fetching: false,
        error: null,
        friends: action.payload
      }
    case ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.actionType,
        currentFriend: action.currentFriend
      }
    case SAVING:
      return {
        ...state,
        showForm: false,
        saving: true
      }
    case SAVED:
      return {
        ...state,
        saving: false,
        friends: action.payload
      }
    case UPDATING:
      return {
        ...state,
        showForm: false,
        updating: true
      }
    case UPDATED:
      return {
        ...state,
        updating: false,
        friends: action.payload
      }
    default:
      return state
  }
}
