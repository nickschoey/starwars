import React from 'react';
import PersonCard from './Characters/PersonCard';

import state from '../data';
import CardView from './common/CardView';
import CharacterFilters from './Characters/CharacterFilters';

const Characters = () => {
  // const characters = useSelector(state => state.characters);
  const { characters } = state;
  const renderCharacters = () => {
    return (
      characters.data &&
      Object.values(characters.data).map(person => (
        <PersonCard key={person.url} person={person} />
      ))
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <CharacterFilters />

      <CardView style={{ flexGrow: 1 }}>{renderCharacters()}</CardView>
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};

export default Characters;
