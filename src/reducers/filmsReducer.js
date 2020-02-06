import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE
} from '../actions/getFilms';

const initialState = {
  pending: false,
  films: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_REQUEST:
      return { ...state, pending: true };
    case GET_FILMS_SUCCESS:
      return { ...state, pending: false, films: action.films };
    case GET_FILMS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getMovies = state => state.films;
export const getMoviesRequest = state => state.pending;
export const getMoviesError = state => state.error;
