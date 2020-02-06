import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getCharacters from './actions/getCharacters';
import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea,
  Avatar,
  Balloon,
  List,
  Table,
  Progress,
  Icon,
  Sprite,
  ControllerIcon
} from 'nes-react';

import getFilms from './actions/getFilms';
import getStarships from './actions/getStarships';
import getSpecies from './actions/getSpecies';
import getVehicles from './actions/getVehicles';
import getPlanets from './actions/getPlanets';
import PersonCard from './PersonCard';
function App() {
  const [selectedRadio, setselectedRadio] = useState('planets');
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  useEffect(() => {
    dispatch(getCharacters());
    // dispatch(getFilms());
    // dispatch(getStarships());
    // dispatch(getSpecies());
    // dispatch(getVehicles());
    // dispatch(getPlanets());
  }, []);

  const changeRadio = value => {
    setselectedRadio(value);
  };

  return (
    <MainContainer>
      <HeroContainer dark>
        <ButtonArray>
          <Radios
            selectedValue={selectedRadio}
            options={[
              {
                value: 'people',
                label: 'People'
              },
              {
                value: 'planets',
                label: 'Planets'
              }
            ]}
            onValueChange={changeRadio}
          />
        </ButtonArray>
        <TitleArea>Star Wars</TitleArea>
        <div></div>
      </HeroContainer>
      <CardContainer>
        {characters.characters &&
          Object.values(characters.characters).map(person => (
            <PersonCard key={person.url} person={person} />
          ))}
      </CardContainer>
      <FooterContainer></FooterContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled(Container)`
  display: flex;
  height: 25vh;
  width: 100%;
`;
const ButtonArray = styled.div`
  align-self: flex-end;
`;

const TitleArea = styled.div`
  justify-self: center;
  align-self: center;
  color: #ffe81f;
  font-size: 5em;
`;

const FooterContainer = styled(Container)`
  height: 5vh;
  width: 100%;
`;

const CardContainer = styled.div`
  margin-top: 10px;
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
`;

export default App;
