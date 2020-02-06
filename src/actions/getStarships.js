import getAllData from './helper/getAllData';

export const GET_STARSHIPS_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';

export const getStarshipsRequest = () => {
  return {
    type: GET_STARSHIPS_REQUEST
  };
};

export const getStarshipsSuccess = starships => {
  return {
    type: GET_STARSHIPS_SUCCESS,
    starships
  };
};

export const getStarshipsFailure = error => {
  return {
    type: GET_STARSHIPS_FAILURE,
    error
  };
};

function getStarships() {
  return dispatch => {
    dispatch(getStarshipsRequest());
    getAllData('starships')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getStarshipsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getStarshipsFailure(error));
      });
  };
}

export default getStarships;
