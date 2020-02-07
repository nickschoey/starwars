import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PersonCard from './components/PersonCard';

import getCharacters from './actions/getCharacters';
import getFilms from './actions/getFilms';
import getStarships from './actions/getStarships';
import getSpecies from './actions/getSpecies';
import getVehicles from './actions/getVehicles';
import getPlanets from './actions/getPlanets';
import { characters } from './data';

function App() {
  // const dispatch = useDispatch();
  // const characters = useSelector(state => state.characters);
  useEffect(() => {
    // dispatch(getCharacters());
    // dispatch(getFilms());
    // dispatch(getStarships());
    // dispatch(getSpecies());
    // dispatch(getVehicles());
    // dispatch(getPlanets());
  }, []);

  return (
    <MainContainer>
      <CardContainer>
        {characters.characters &&
          Object.values(characters.characters).map(person => (
            <PersonCard key={person.url} person={person} />
          ))}
      </CardContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-top: 10px;
  width: 1024px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default App;
