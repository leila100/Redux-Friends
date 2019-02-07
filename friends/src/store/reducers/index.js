import {
  FETCHING,
  FETCHED,
  ERROR,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
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
        error: action.payload,
        showForm: "",
        fetching: false,
        saving: false,
        updating: false,
        deleting: false
      }
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.actionType,
        error: null,
        currentFriend: action.currentFriend
      }
    case SAVING:
      return {
        ...state,
        showForm: "",
        error: null,
        saving: true
      }
    case SAVED:
      return {
        ...state,
        saving: false,
        error: null,
        friends: action.payload
      }
    case UPDATING:
      return {
        ...state,
        showForm: "",
        error: null,
        updating: true
      }
    case UPDATED:
      return {
        ...state,
        updating: false,
        error: null,
        friends: action.payload
      }
    case DELETING:
      return {
        ...state,
        error: null,
        showForm: "",
        deleting: true
      }
    case DELETED:
      return {
        ...state,
        deleting: false,
        error: null,
        friends: action.payload
      }
    default:
      return state
  }
}
