import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PersonCard from './PersonCard';

import { characters } from '../data';
import CardView from './common/CardView';

const Characters = () => {
  // const characters = useSelector(state => state.characters);

  const renderCharacters = () => {
    return (
      characters.characters &&
      Object.values(characters.characters).map(person => (
        <PersonCard key={person.url} person={person} />
      ))
    );
  };

  return <CardView>{renderCharacters()}</CardView>;
};

export default Characters;
