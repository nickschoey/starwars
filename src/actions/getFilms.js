import getAllData from '../helper/getAllData';
import extractDigits from '../helper/extractId';

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
        const films = res.reduce((acc, film) => {
          // data normalisation to be used locally
          const filmId = extractDigits(film.url);
          acc[filmId] = film;
          acc[filmId].id = filmId;

          acc[filmId].species = acc[filmId].species.map(specie =>
            extractDigits(specie)
          );
          acc[filmId].characters = acc[filmId].characters.map(character =>
            extractDigits(character)
          );
          acc[filmId].planets = acc[filmId].planets.map(planet =>
            extractDigits(planet)
          );
          acc[filmId].starships = acc[filmId].starships.map(starship =>
            extractDigits(starship)
          );
          acc[filmId].vehicles = acc[filmId].vehicles.map(vehicle =>
            extractDigits(vehicle)
          );
          return acc;
        }, {});
        dispatch(getFilmsSuccess(films));
        localStorage.setItem('films', JSON.stringify(films));
        return res;
      })
      .catch(error => {
        dispatch(getFilmsFailure(error));
      });
  };
}

export default getFilms;
