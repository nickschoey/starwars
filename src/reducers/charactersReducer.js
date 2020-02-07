import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE
} from '../actions/getCharacters';

const initialState = {
  pending: null,
  data: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return { ...state, pending: true };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, pending: false, data: action.characters };
    case GET_CHARACTERS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getCharacters = state => state.data;
export const getCharactersRequest = state => state.pending;
export const getCharactersError = state => state.error;
