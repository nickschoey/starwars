import Fuse from 'fuse.js';

const applyFilter = (searchText, values, keys) => {
  const options = {
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys
  };
  const fuse = new Fuse(values, options);
  return fuse.search(searchText);
};

export default applyFilter;
