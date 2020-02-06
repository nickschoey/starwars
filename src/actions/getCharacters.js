import getAllData from './helper/getAllData';
import extractDigits from './helper/extractId';

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
        const object = res.reduce((acc, person) => {
          // data normalisation to be used locally
          const personId = extractDigits(person.url);
          acc[personId] = person;

          acc[personId].homeworld = extractDigits(acc[personId].homeworld);

          acc[personId].films = acc[personId].films.map(film =>
            extractDigits(film)
          );
          acc[personId].species = acc[personId].species.map(specie =>
            extractDigits(specie)
          );
          acc[personId].starships = acc[personId].starships.map(starship =>
            extractDigits(starship)
          );
          acc[personId].vehicles = acc[personId].vehicles.map(vehicle =>
            extractDigits(vehicle)
          );
          return acc;
        }, {});
        dispatch(getCharactersSuccess(object));
        return res;
      })
      .catch(error => {
        dispatch(getCharactersFailure(error));
      });
  };
}

export default getCharacters;
