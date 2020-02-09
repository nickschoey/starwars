import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonCard from './Characters/PersonCard';
import state from '../data';
import CardView from './common/CardView';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';

const Characters = () => {
  // const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const allCharacters = state.characters.data;
  const [characters, setCharacters] = useState(allCharacters);
  const searchText = useSelector(stat => stat.search.text);

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
  }, [searchText]);

  useEffect(() => {
    dispatch(resetSearch());
    dispatch(enableVisible());
  }, []);

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
        paddingTop: '10rem'
      }}
    >
      <h1>People</h1>
      <CardView>{renderCharacters()}</CardView>
    </div>
  );
};

export default Characters;
