import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAILURE
} from '../actions/getPlanets';

const initialState = {
  pending: true,
  data: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS_REQUEST:
      return { ...state, pending: true };
    case GET_PLANETS_SUCCESS:
      return { ...state, pending: false, data: action.planets };
    case GET_PLANETS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getPlanets = state => state.planets;
export const getPlanetsRequest = state => state.pending;
export const getPlanetsError = state => state.error;
