import { FETCHING, FETCHED, ERROR, SAVING, SAVED, SHOW_FORM } from "../actions"

const initialState = {
  showForm: "",
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
      console.log("In FETCHING")
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
        showForm: action.actionType
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
    default:
      return state
  }
}
