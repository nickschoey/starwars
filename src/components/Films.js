import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardView from './common/CardView';
import state from '../data';
import FilmCard from './Films/FilmCard';
import { MainContainer } from './common/Containers';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';

const Films = () => {
  const dispatch = useDispatch();
  const allFilms = state.films.data;
  const [films, setFilms] = useState(allFilms);
  const searchText = useSelector(stat => stat.search.text);

  useEffect(() => {
    if (searchText !== '') {
      const filteredData = applyFilter(searchText, Object.values(allFilms), [
        'title'
      ]);
      setFilms(filteredData);
    } else {
      setFilms(allFilms);
    }
  }, [searchText, allFilms]);

  useEffect(() => {
    dispatch(resetSearch());
    dispatch(enableVisible());
  }, [dispatch]);

  const renderFilms = () => {
    return Object.values(films).map(film => (
      <FilmCard key={film.url} film={film} />
    ));
  };
  return (
    <MainContainer>
      <CardView>{renderFilms()}</CardView>
    </MainContainer>
  );
};

export default Films;
