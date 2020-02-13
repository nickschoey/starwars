import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StickyContainer } from 'react-sticky';

import Character from './components/Characters/Character';
import Hero from './components/Hero';
import Planets from './components/Planets';
import Films from './components/Films';
import Characters from './components/Characters';

import getCharacters, { getCharactersSuccess } from './actions/getCharacters';
import getFilms, { getFilmsSuccess } from './actions/getFilms';
import getStarships, { getStarshipsSuccess } from './actions/getStarships';
import getSpecies, { getSpeciesSuccess } from './actions/getSpecies';
import getVehicles, { getVehiclesSuccess } from './actions/getVehicles';
import getPlanets, { getPlanetsSuccess } from './actions/getPlanets';
import LoadModal from './components/LoadModal';
import Planet from './components/Planets/Planet';
import Film from './components/Films/Film';
import Github from './components/common/Github';
import useLoadStatus from './helper/useLoadStatus';

const App = () => {
  const dispatch = useDispatch();
  const dataLoaded = useLoadStatus();

  useEffect(() => {
    const cachedCharacters = JSON.parse(localStorage.getItem('characters'));
    const cachedFilms = JSON.parse(localStorage.getItem('films'));
    const cachedSpecies = JSON.parse(localStorage.getItem('species'));
    const cachedVehicles = JSON.parse(localStorage.getItem('vehicles'));
    const cachedPlanets = JSON.parse(localStorage.getItem('planets'));
    const cachedStarships = JSON.parse(localStorage.getItem('starships'));

    if (
      cachedCharacters &&
      cachedFilms &&
      cachedSpecies &&
      cachedVehicles &&
      cachedPlanets &&
      cachedStarships
    ) {
      dispatch(getCharactersSuccess(cachedCharacters));
      dispatch(getFilmsSuccess(cachedFilms));
      dispatch(getSpeciesSuccess(cachedSpecies));
      dispatch(getVehiclesSuccess(cachedVehicles));
      dispatch(getPlanetsSuccess(cachedPlanets));
      dispatch(getStarshipsSuccess(cachedStarships));
    } else {
      dispatch(getCharacters());
      dispatch(getFilms());
      dispatch(getStarships());
      dispatch(getSpecies());
      dispatch(getVehicles());
      dispatch(getPlanets());
    }
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
