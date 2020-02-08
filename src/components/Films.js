import React from 'react';
import CardView from './common/CardView';
import state from '../data';
import FilmCard from './Films/FilmCard';

const Films = () => {
  const films = state.films.data;
  console.log(films);
  const renderFilms = () => {
    return Object.values(films).map(film => <FilmCard film={film} />);
  };
  return (
    <div>
      <CardView>{renderFilms()}</CardView>
    </div>
  );
};

export default Films;
