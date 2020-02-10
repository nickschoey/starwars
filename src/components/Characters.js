import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container } from 'nes-react';
import PersonCard from './Characters/PersonCard';
import state from '../data';
import CardView from './common/CardView';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';
import sortCollection from '../helper/sortCollection';

const Characters = () => {
  // const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const allCharacters = state.characters.data;
  const [characters, setCharacters] = useState(allCharacters);
  const [ascendingSort, setAscendingSort] = useState(true);
  const searchText = useSelector(stat => stat.search.text);

  // Calling search algorithm
  useEffect(() => {
    if (searchText !== '') {
      const filteredData = applyFilter(
        searchText,
        Object.values(allCharacters),
        ['name']
      );
      setCharacters(filteredData);
    } else {
      setCharacters(allCharacters);
    }
  }, [searchText, allCharacters]);

  // Enable searchbar and reset search on mounting
  useEffect(() => {
    dispatch(resetSearch());
    dispatch(enableVisible());
  }, [dispatch]);

  const onHandleSort = value => {
    const charactersArray = Object.values(characters);
    const sortedCharacters = sortCollection(
      charactersArray,
      value,
      ascendingSort
    );
    setAscendingSort(!ascendingSort);
    setCharacters(sortedCharacters);
  };

  const renderCharacters = () => {
    return Object.values(characters).map(person => (
      <PersonCard key={person.url} person={person} />
    ));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '7rem'
      }}
    >
      <h1>People</h1>
      <div style={{ alignSelf: 'center' }}>
        <Container dark title="Sort">
          <Button onClick={() => onHandleSort('name')}>
            {`Name ${ascendingSort ? 'A↓Z' : 'Z↑A'}`}
          </Button>
        </Container>
      </div>
      <CardView>{renderCharacters()}</CardView>
    </div>
  );
};

export default Characters;
