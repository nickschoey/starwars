import { getMoviesRequest, getMoviesSuccess, getMoviesFailure } from './index';
import getAllData from './helper/getAllData';

function getMovies() {
  return dispatch => {
    dispatch(getMoviesRequest());
    getAllData('films')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getMoviesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getMoviesFailure(error));
      });
  };
}

export default getMovies;
