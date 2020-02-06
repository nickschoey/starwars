import { combineReducers } from 'redux';
import characters from './charactersReducer';
import planets from './planetsReducer';
import vehicles from './vehiclesReducer';
import films from './filmsReducer';

export default combineReducers({
  characters,
  planets,
  vehicles,
  films
});
