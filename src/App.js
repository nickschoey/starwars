import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StickyContainer } from 'react-sticky';

import Character from './components/Characters/Character';
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
import Planet from './components/Planets/Planet';
import Film from './components/Films/Film';
import Github from './components/common/Github';
import useLoadStatus from './helper/useLoadStatus';

const App = () => {
  const dispatch = useDispatch();
  const dataLoaded = useLoadStatus();

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getFilms());
    dispatch(getStarships());
    dispatch(getSpecies());
    dispatch(getVehicles());
    dispatch(getPlanets());
  }, [dispatch]);

  return (
    <Router>
      {!dataLoaded.success ? (
        <LoadModal />
      ) : (
        <StickyContainer>
          <Hero />
          <Github />

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
            <Route path="/planet/:id">
              <Planet />
            </Route>
            <Route path="/film/:id">
              <Film />
            </Route>
          </Switch>
        </StickyContainer>
      )}
    </Router>
  );
};

export default App;
