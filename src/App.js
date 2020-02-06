import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCharacters from './actions/getCharacters';
import getFilms from './actions/getFilms';
import getStarships from './actions/getStarships';
import getSpecies from './actions/getSpecies';
import getVehicles from './actions/getVehicles';
import getPlanets from './actions/getPlanets';

function App() {
  const dispatch = useDispatch();
  dispatch(getCharacters());
  // dispatch(getFilms());
  // dispatch(getStarships());
  // dispatch(getSpecies());
  // dispatch(getVehicles());
  // dispatch(getPlanets());

  useEffect(() => {}, []);

  return <div className="App" />;
}

export default App;
