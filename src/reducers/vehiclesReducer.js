import {
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAILURE
} from '../actions/getVehicles';

const initialState = {
  pending: false,
  vehicles: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VEHICLES_REQUEST:
      return { ...state, pending: true };
    case GET_VEHICLES_SUCCESS:
      return { ...state, pending: false, vehicles: action.vehicles };
    case GET_VEHICLES_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getPlanets = state => state.vehicles;
export const getPlanetsRequest = state => state.pending;
export const getPlanetsError = state => state.error;
