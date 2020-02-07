import React from 'react';
import PersonCard from './PersonCard';

import state from '../data';
import CardView from './common/CardView';

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

  return <CardView>{renderCharacters()}</CardView>;
};

export default Characters;
