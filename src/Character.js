import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { planets, characters } from './data';
import { Container } from 'nes-react';

const Character = () => {
  const { id } = useParams();
  const person = characters.data[id];
  console.log(person);
  return (
    <MainContainer>
      <div style={{ display: 'flex' }}>
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px'
          }}
        >
          <img src="https://via.placeholder.com/250" alt={person.name} />
        </Container>
        <Container style={{ width: '650px' }}>
          <p>
            <strong>Name: </strong>
            {person.name}
          </p>
          <p>
            <strong>Born in </strong>
            {planets.data[person.homeworld].name}
            <strong> in </strong>
            {person.birth_year}
          </p>
          <p>
            <strong>Height: </strong>
            {`${person.height}cm. `}
            <strong>Weight: </strong>
            {`${person.mass}kg.`}
          </p>

          <p>
            <strong>Eye Color: </strong>
            {person.eye_color}
          </p>
          <p>
            <strong>Hair: </strong>
            {person.hair_color}
          </p>
          <p>
            <strong>Skin: </strong>
            {person.skin_color}
          </p>
        </Container>
      </div>
      <div style={{ display: 'flex' }}>
        <Container title="Vehicles"></Container>
        <Container title="Starships"></Container>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Character;
