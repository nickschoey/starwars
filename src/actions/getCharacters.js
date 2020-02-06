import getAllData from './helper/getAllData';

export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';

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

function getCharacters() {
  return dispatch => {
    dispatch(getCharactersRequest());
    getAllData('people')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getCharactersSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getCharactersFailure(error));
      });
  };
}

export default getCharacters;
