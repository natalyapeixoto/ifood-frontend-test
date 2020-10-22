import { GET_FILTERS_SUCCESS, GET_FILTERS_FAILURE, SET_LOADING } from '../actions/types'

export const initialState = {
    filters: [],
    loading: false
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case GET_FILTERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case SET_LOADING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
