import getAllData from './helper/getAllData';

export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

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

function getFilms() {
  return dispatch => {
    dispatch(getFilmsRequest());
    getAllData('films')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getFilmsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getFilmsFailure(error));
      });
  };
}

export default getFilms;
