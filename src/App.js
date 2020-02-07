import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Character from './Character';
import Hero from './components/Hero';
import Planets from './components/Planets';
import Films from './components/Films';
import Characters from './components/Characters';

import getCharacters from './actions/getCharacters';
import getFilms from './actions/getFilms';
import getStarships from './actions/getStarships';
import getSpecies from './actions/getSpecies';
import getVehicles from './actions/getVehicles';
import getPlanets from './actions/getPlanets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCharacters());
    // dispatch(getFilms());
    // dispatch(getStarships());
    // dispatch(getSpecies());
    // dispatch(getVehicles());
    // dispatch(getPlanets());
  }, []);
  return (
    <Router>
      <div>
        <Hero />
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
