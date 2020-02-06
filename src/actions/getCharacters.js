import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure
} from './index';
import getAllData from './helper/getAllData';

function getCharacters() {
  return dispatch => {
    dispatch(getCharactersRequest());
    getAllData('people')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getCharactersSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getCharactersFailure(error));
      });
  };
}

export default getCharacters;
