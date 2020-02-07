import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StickyContainer } from 'react-sticky';

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
import LoadModal from './components/LoadModal';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
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
      <StickyContainer>
        <Hero />
        {
          //<LoadModal />
        }
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
      </StickyContainer>
    </Router>
  );
};

export default App;
