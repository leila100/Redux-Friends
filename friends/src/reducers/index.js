import { FETCHING, FETCHED, ERROR } from "../actions"

const initialState = {
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
    default:
      return state
  }
}
