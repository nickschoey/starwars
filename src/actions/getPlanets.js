import getAllData from '../helper/getAllData';
import extractDigits from '../helper/extractId';

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
        const planets = res.reduce((acc, planet) => {
          // data normalisation to be used locally
          const planetId = extractDigits(planet.url);
          acc[planetId] = planet;
          acc[planetId].id = planetId;

          acc[planetId].films = acc[planetId].films.map(film =>
            extractDigits(film)
          );
          acc[planetId].residents = acc[planetId].residents.map(resident =>
            extractDigits(resident)
          );

          return acc;
        }, {});
        dispatch(getPlanetsSuccess(planets));
        localStorage.setItem('planets', JSON.stringify(planets));
        return res;
      })
      .catch(error => {
        dispatch(getPlanetsFailure(error));
      });
  };
}

export default getPlanets;
