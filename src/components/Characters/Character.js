import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import Anchor from '../common/Anchor';

const Character = () => {
  const { id } = useParams();
  const person = state.characters.data[id];
  const planet = state.planets.data[person.homeworld];
  const species = state.species.data[person.species];
  const [image, setImage] = useState('https://via.placeholder.com/250');
  useEffect(() => {
    loadImage(person.id);
  }, []);
  const vehicles = person.vehicles.map(vehicle => {
    return state.vehicles.data[vehicle];
  });

  const starships = person.starships.map(starship => {
    return state.starships.data[starship];
  });

  const films = person.films.map(film => {
    return state.films.data[film];
  });

  const loadImage = id => {
    if (id < 5) {
      import(`../../assets/${id}.png`).then(image => {
        setImage(image.default);
      });
    }
  };

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
          <img src={image} alt={person.name} />
        </Container>
        <Container style={{ width: '650px' }}>
          <p>
            <strong>Name: </strong>
            {`${person.name} (${species.name})`}
          </p>
          <p>
            <strong>Born in </strong>
            <Anchor to={`/planets/${planet.id}`}>{`${planet.name}`}</Anchor>
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
            <p>{vehicle.name}</p>
          ))}
        </Container>
        <Container title="Starships" style={{ flexGrow: 1 }}>
          {starships.map(starship => (
            <p>{starship.name}</p>
          ))}
        </Container>
      </div>
      <div style={{ display: 'flex', width: '950px' }}>
        <Container title="Films" style={{ flexGrow: 1 }}>
          {films.map(film => (
            <p>{film.title}</p>
          ))}
        </Container>
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
