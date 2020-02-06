import {
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_FAILURE
} from '../actions/getStarships';

const initialState = {
  pending: false,
  starships: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STARSHIPS_REQUEST:
      return { ...state, pending: true };
    case GET_STARSHIPS_SUCCESS:
      return { ...state, pending: false, starships: action.starships };
    case GET_STARSHIPS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getStarships = state => state.starships;
export const getStarshipsRequest = state => state.pending;
export const getStarshipsError = state => state.error;
