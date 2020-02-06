import { combineReducers } from 'redux';
import characters from './charactersReducer';
import planets from './planetsReducer';
import vehicles from './vehiclesReducer';
import movies from './moviesReducer';

export default combineReducers({
  characters,
  planets,
  vehicles,
  movies
});
