import getAllData from './helper/getAllData';

export const GET_SPECIES_REQUEST = 'GET_SPECIES_REQUEST';
export const GET_SPECIES_SUCCESS = 'GET_SPECIES_SUCCESS';
export const GET_SPECIES_FAILURE = 'GET_SPECIES_FAILURE';

export const getSpeciesRequest = () => {
  return {
    type: GET_SPECIES_REQUEST
  };
};

export const getSpeciesSuccess = species => {
  return {
    type: GET_SPECIES_SUCCESS,
    species
  };
};

export const getSpeciesFailure = error => {
  return {
    type: GET_SPECIES_FAILURE,
    error
  };
};

function getSpecies() {
  return dispatch => {
    dispatch(getSpeciesRequest());
    getAllData('species')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getSpeciesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getSpeciesFailure(error));
      });
  };
}

export default getSpecies;
