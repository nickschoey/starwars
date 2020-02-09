import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';
import FilmsContainer from '../common/FilmsContainer';

const Character = () => {
  const { id } = useParams();
  const person = state.characters.data[id];
  const planet = state.planets.data[person.homeworld];
  const species = state.species.data[person.species];
  const [image, setImage] = useState('https://via.placeholder.com/250');

  useEffect(() => {
    loadImage(person.id, setImage);
  }, []);

  const vehicles = person.vehicles.map(vehicle => {
    return state.vehicles.data[vehicle];
  });

  const starships = person.starships.map(starship => {
    return state.starships.data[starship];
  });

  return (
    <MainContainer>
      <h1>{person.name}</h1>
      <h2>{`(${species.name})`}</h2>
      <div style={{ display: 'flex' }}>
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px'
          }}
        >
          <img src={image} alt={person.name} />
        </Container>
        <Container style={{ width: '650px' }}>
          <p>
            {species.name === 'Droid' ? (
              <strong>Built in </strong>
            ) : (
              <strong>Born in </strong>
            )}

            <Anchor to={`/planet/${planet.id}`}>{`${planet.name}`}</Anchor>
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
      <div style={{ display: 'flex', width: '950px' }}>
        <Container title="Vehicles" style={{ flexGrow: 1 }}>
          {vehicles.map(vehicle => (
            <p key={vehicle.url}>{vehicle.name}</p>
          ))}
        </Container>
        <Container title="Starships" style={{ flexGrow: 1 }}>
          {starships.map(starship => (
            <p>{starship.name}</p>
          ))}
        </Container>
      </div>
      <FilmsContainer styling={{ width: '950px' }} filmIds={person.films} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export default Character;
