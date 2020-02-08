import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import state from '../../data';
import { Container } from 'nes-react';
// name: "Alderaan"
// rotation_period: "24"
// orbital_period: "364"
// diameter: "12500"
// climate: "temperate"
// gravity: "1 standard"
// terrain: "grasslands, mountains"
// surface_water: "40"
// population: "2000000000"
// residents: (3) [5, 68, 81]
// films: (2) [6, 1]
// created: "2014-12-10T11:35:48.479000Z"
// edited: "2014-12-20T20:58:18.420000Z"

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const Planet = () => {
  const { id } = useParams();
  const planet = state.planets.data[id];

  const renderNumber = (data, measure = '', unknownMsg = 'Unknown') => {
    const parsedNumber = parseInt(data, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parsedNumber)) {
      return unknownMsg;
    }
    return `${formatNumber(parsedNumber)} ${measure}`;
  };

  return (
    <MainContainer>
      <Container style={{ flex: 1 }}>
        <p>
          <strong>Planet: </strong>
          {`${planet.name} (${renderNumber(
            planet.population,
            'population',
            'Population Unknown'
          )})`}
        </p>
        <p>
          <strong>Rotation Period: </strong>
          {renderNumber(planet.rotation_period, 'hours')}
        </p>
        <p>
          <strong>Orbital Period: </strong>
          {renderNumber(planet.orbital_period, 'days')}
        </p>
        <p>
          <strong>Diameter: </strong>
          {renderNumber(planet.diameter, 'km.')}
        </p>
        <p>
          <strong>Climate: </strong>
          {`${planet.climate}`}
        </p>
        <p>
          <strong>Gravity: </strong>
          {`${planet.gravity}`}
        </p>
        <p>
          <strong>Terrain: </strong>
          {`${planet.terrain}`}
        </p>
        <p>
          <strong>Surface Water: </strong>
          {renderNumber(planet.surface_water, '%')}
        </p>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Planet;
