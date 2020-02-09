import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Fuse from 'fuse.js';
import PersonCard from './Characters/PersonCard';
import state from '../data';
import CardView from './common/CardView';

const applyFilter = (searchText, values) => {
  const options = {
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name']
  };
  const fuse = new Fuse(values, options);
  return fuse.search(searchText);
};

const Characters = () => {
  // const characters = useSelector(state => state.characters);
  const allCharacters = state.characters.data;
  const searchText = useSelector(state => state.search.text);
  const [characters, setCharacters] = useState(allCharacters);

  useEffect(() => {
    if (searchText !== '') {
      const filteredData = applyFilter(
        searchText,
        Object.values(allCharacters)
      );
      setCharacters(filteredData);
    } else {
      setCharacters(allCharacters);
    }
  }, [searchText]);

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
