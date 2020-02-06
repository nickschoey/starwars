import { getFilmsRequest, getFilmsSuccess, getFilmsFailure } from './index';
import getAllData from './helper/getAllData';

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
