export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';
export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

export const getCharactersRequest = () => {
  return {
    type: GET_CHARACTERS_REQUEST
  };
};

export const getCharactersSuccess = characters => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    characters
  };
};

export const getCharactersFailure = error => {
  return {
    type: GET_CHARACTERS_FAILURE,
    error
  };
};

export const getFilmsRequest = () => {
  return {
    type: GET_FILMS_REQUEST
  };
};

export const getFilmsSuccess = films => {
  return {
    type: GET_FILMS_SUCCESS,
    films
  };
};

export const getFilmsFailure = error => {
  return {
    type: GET_FILMS_FAILURE,
    error
  };
};
