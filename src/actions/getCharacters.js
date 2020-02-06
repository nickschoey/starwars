import axios from 'axios';

import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure
} from './index';

function getAllStarwarsPeople() {
  let people = [];
  // first page
  return axios('https://swapi.co/api/people/')
    .then(response => {
      // collect people from first page
      people = response.data.results;
      return response.data.count;
    })
    .then(count => {
      // exclude the first request
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      const promises = [];
      // start at 2 as you already queried the first page
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.co/api/people?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then(response => {
      // get the rest records - pages 2 through n.
      people = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        people
      );
      return people;
    });
}

function getCharacters() {
  return dispatch => {
    dispatch(getCharactersRequest());
    getAllStarwarsPeople()
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
