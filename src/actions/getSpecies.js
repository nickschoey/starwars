import getAllData from './helper/getAllData';
import extractDigits from './helper/extractId';

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
        const species = res.reduce((acc, specie) => {
          // data normalisation to be used locally
          const specieId = extractDigits(specie.url);
          acc[specieId] = specie;

          acc[specieId].homeworld = acc[specieId].homeworld
            ? extractDigits(acc[specieId].homeworld)
            : null;

          acc[specieId].films = acc[specieId].films.map(film =>
            extractDigits(film)
          );
          acc[specieId].people = acc[specieId].people.map(person =>
            extractDigits(person)
          );

          return acc;
        }, {});
        dispatch(getSpeciesSuccess(species));
        return res;
      })
      .catch(error => {
        dispatch(getSpeciesFailure(error));
      });
  };
}

export default getSpecies;
