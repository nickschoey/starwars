import axios from 'axios';
import state from '../data';

// Extracts all data from Swapi in consecutive calls
export default function getAllData(endpoint) {
  let data = [];
  // first page
  return axios(`https://swapi.co/api/${endpoint}/`)
    .then(response => {
      // collect data from first page
      data = response.data.results;
      return response.data.count;
    })
    .then(count => {
      // exclude the first request
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      const promises = [];
      // start at 2 as you already queried the first page
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.co/api/${endpoint}?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then(response => {
      // get the rest records - pages 2 through n.
      data = response.reduce(
        (acc, singleResponse) => [...acc, ...singleResponse.data.results],
        data
      );
      return data;
    })
    .catch(() => {
      // Swapi tends to fail and get saturated. This returns the right data if needed
      return state[endpoint];
    });
}

// Load offline data for dev purposes
// export default function getAllData(endpoint) {
//   return new Promise((res, rej) => {
//     res(state[endpoint]);
//   });
// }
