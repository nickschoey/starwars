import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getCharacters, { getCharactersSuccess } from '../actions/getCharacters';
import getFilms, { getFilmsSuccess } from '../actions/getFilms';
import getStarships, { getStarshipsSuccess } from '../actions/getStarships';
import getSpecies, { getSpeciesSuccess } from '../actions/getSpecies';
import getVehicles, { getVehiclesSuccess } from '../actions/getVehicles';
import getPlanets, { getPlanetsSuccess } from '../actions/getPlanets';

function useSwapi() {
  const dispatch = useDispatch();
  const cachedCharacters = JSON.parse(localStorage.getItem('characters'));
  const cachedFilms = JSON.parse(localStorage.getItem('films'));
  const cachedSpecies = JSON.parse(localStorage.getItem('species'));
  const cachedVehicles = JSON.parse(localStorage.getItem('vehicles'));
  const cachedPlanets = JSON.parse(localStorage.getItem('planets'));
  const cachedStarships = JSON.parse(localStorage.getItem('starships'));

  useEffect(() => {
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

  return true;
}

export default useSwapi;
