import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';
import FilmsContainer from '../common/FilmsContainer';
import VehiclesContainer from '../common/VehiclesContainer';
import InfoElement from '../common/InfoElement';
import { MainContainer, FlexContainer } from '../common/Containers';

const Character = () => {
  const { id } = useParams();
  const person = state.characters.data[id];
  const planet = state.planets.data[person.homeworld];
  const species = state.species.data[person.species];
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage(person.id, setImage);
  }, []);

  return (
    <MainContainer>
      <h1>{person.name}</h1>
      <h2>{`(${species.name})`}</h2>
      <FlexContainer>
        <ImageContainer>
          <img src={image} alt={person.name} />
        </ImageContainer>
        <Container style={{ width: '650px' }}>
          <FlexContainer>
            <InfoElement
              title={species.name === 'Droid' ? 'Built in ' : 'Born in '}
              data={<Anchor to={`/planet/${planet.id}`}>{planet.name}</Anchor>}
            />
            <InfoElement title="in " data={person.birth_year} />
          </FlexContainer>
          <FlexContainer>
            <InfoElement title="Height: " data={`${person.height}cm.`} />
            <InfoElement title="Weight: " data={`${person.mass}kg.`} />
          </FlexContainer>
          <InfoElement title="Eye Color: " data={person.eye_color} />
          <InfoElement title="Hair: " data={person.hair_color} />
          <InfoElement title="Skin: " data={person.skin_color} />
        </Container>
      </FlexContainer>

      <div style={{ display: 'flex', width: '950px' }}>
        <VehiclesContainer
          vehicleIds={person.vehicles}
          type="vehicles"
          tooltipAlign="left"
        />
        <VehiclesContainer
          vehicleIds={person.starships}
          type="starships"
          tooltipAlign="right"
        />
      </div>
      <FilmsContainer styling={{ width: '950px' }} filmIds={person.films} />
    </MainContainer>
  );
};

const ImageContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export default Character;
