import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from '../actions';

const initialState = {
  pending: false,
  movies: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { ...state, pending: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, pending: false, movies: action.movies };
    case GET_MOVIES_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getMovies = state => state.movies;
export const getMoviesRequest = state => state.pending;
export const getMoviesError = state => state.error;
