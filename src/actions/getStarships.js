import getAllData from '../helper/getAllData';
import extractDigits from '../helper/extractId';

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
        const starships = res.reduce((acc, starship) => {
          // data normalisation to be used locally
          const starshipId = extractDigits(starship.url);
          acc[starshipId] = starship;
          acc[starshipId].id = starshipId;

          acc[starshipId].films = acc[starshipId].films.map(film =>
            extractDigits(film)
          );
          acc[starshipId].pilots = acc[starshipId].pilots.map(pilot =>
            extractDigits(pilot)
          );

          return acc;
        }, {});
        dispatch(getStarshipsSuccess(starships));
        return res;
      })
      .catch(error => {
        dispatch(getStarshipsFailure(error));
      });
  };
}

export default getStarships;
