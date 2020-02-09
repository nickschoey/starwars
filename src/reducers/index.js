import { combineReducers } from 'redux';
import characters from './charactersReducer';
import planets from './planetsReducer';
import vehicles from './vehiclesReducer';
import films from './filmsReducer';
import starships from './starshipsReducer';
import species from './speciesReducer';
import search from './searchReducer';

export default combineReducers({
  characters,
  planets,
  vehicles,
  films,
  starships,
  species,
  search
});
