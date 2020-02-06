import {
  GET_SPECIES_REQUEST,
  GET_SPECIES_SUCCESS,
  GET_SPECIES_FAILURE
} from '../actions/getSpecies';

const initialState = {
  pending: false,
  species: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES_REQUEST:
      return { ...state, pending: true };
    case GET_SPECIES_SUCCESS:
      return { ...state, pending: false, species: action.species };
    case GET_SPECIES_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getSpecies = state => state.species;
export const getSpeciesRequest = state => state.pending;
export const getSpeciesError = state => state.error;
