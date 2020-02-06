import getAllData from './helper/getAllData';

export const GET_PLANETS_REQUEST = 'GET_PLANETS_REQUEST';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';

export const getPlanetsRequest = () => {
  return {
    type: GET_PLANETS_REQUEST
  };
};

export const getPlanetsSuccess = planets => {
  return {
    type: GET_PLANETS_SUCCESS,
    planets
  };
};

export const getPlanetsFailure = error => {
  return {
    type: GET_PLANETS_FAILURE,
    error
  };
};

function getPlanets() {
  return dispatch => {
    dispatch(getPlanetsRequest());
    getAllData('planets')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getPlanetsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getPlanetsFailure(error));
      });
  };
}

export default getPlanets;
