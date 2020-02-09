import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardView from './common/CardView';
import state from '../data';
import FilmCard from './Films/FilmCard';
import { MainContainer } from './common/Containers';
import { enableVisible } from '../actions/search';

const Films = () => {
  const films = state.films.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableVisible());
  }, []);

  const renderFilms = () => {
    return Object.values(films).map(film => <FilmCard film={film} />);
  };
  return (
    <MainContainer>
      <CardView>{renderFilms()}</CardView>
    </MainContainer>
  );
};

export default Films;
