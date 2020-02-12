import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container } from 'nes-react';
import PersonCard from './Characters/PersonCard';
// import state from '../data';
import CardView from './common/CardView';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';
import sortCollection from '../helper/sortCollection';
import { GridContainer } from './common/Containers';
import { changeView } from '../actions/navigation';

const Characters = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector(state => state.characters.data);
  const searchText = useSelector(state => state.search.text);
  const [characters, setCharacters] = useState(allCharacters);
  const [ascendingSort, setAscendingSort] = useState(true);

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
    dispatch(changeView('people'));
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
    <GridContainer>
      <h1>People</h1>
      <div style={{ alignSelf: 'center' }}>
        <Container dark title="Sort">
          <Button onClick={() => onHandleSort('name')}>
            {`Name ${ascendingSort ? 'A↓Z' : 'Z↑A'}`}
          </Button>
        </Container>
      </div>
      <CardView>{renderCharacters()}</CardView>
    </GridContainer>
  );
};

export default Characters;
