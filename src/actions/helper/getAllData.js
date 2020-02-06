import axios from 'axios';

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
    });
}
