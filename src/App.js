import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCharacters from './actions/getCharacters';
import getMovies from './actions/getMovies';

function App() {
  const dispatch = useDispatch();
  dispatch(getCharacters());
  dispatch(getMovies());

  useEffect(() => {}, []);

  return <div className="App" />;
}

export default App;
