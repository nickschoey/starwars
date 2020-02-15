import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardView from './common/CardView';
import FilmCard from './Films/FilmCard';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';
import sortCollection from '../helper/sortCollection';
import { GridContainer } from './common/Containers';
import { changeView } from '../actions/navigation';
import useTopScroll from '../helper/useTopScroll';
import NesContainer from './common/NesContainer';
import NesButton from './common/NesButton';

const Films = () => {
  useTopScroll();
  const dispatch = useDispatch();
  const allFilms = useSelector(state => state.films.data);
  const searchText = useSelector(state => state.search.text);
  const [films, setFilms] = useState(allFilms);
  const [ascendingSort, setAscendingSort] = useState(true);

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
    dispatch(changeView('films'));
  }, [dispatch]);

  const onHandleSort = value => {
    const filmsArray = Object.values(films);
    const sortedFilms = sortCollection(filmsArray, value, ascendingSort);
    setAscendingSort(!ascendingSort);
    setFilms(sortedFilms);
  };

  const renderFilms = () => {
    return Object.values(films).map(film => (
      <FilmCard key={film.url} film={film} />
    ));
  };
  return (
    <GridContainer>
      <h1>Films</h1>
      <div style={{ alignSelf: 'center' }}>
        <NesContainer title="Sort">
          <NesButton onClick={() => onHandleSort('title')}>
            {`Title ${ascendingSort ? 'A↓Z' : 'Z↑A'}`}
          </NesButton>
        </NesContainer>
      </div>
      <CardView>{renderFilms()}</CardView>
    </GridContainer>
  );
};

export default Films;
