import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, List } from 'nes-react';
import state from '../../data';
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
  const people = state.characters.data;
  const films = state.films.data;

  const residents = planet.residents.map(personId => {
    return people[personId];
  });

  const appearedFilms = planet.films.map(filmsId => films[filmsId]);

  const renderNumber = (data, measure = '', unknownMsg = 'Unknown') => {
    const parsedNumber = parseInt(data, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parsedNumber)) {
      return unknownMsg;
    }
    return `${formatNumber(parsedNumber)} ${measure}`;
  };

  const renderPeople = () => {
    return (
      <List>
        {residents.map(resident => (
          <li>{resident.name}</li>
        ))}
      </List>
    );
  };

  const renderFilms = () => {
    return (
      <List>
        {appearedFilms.map(film => (
          <li>{film.title}</li>
        ))}
      </List>
    );
  };

  return (
    <MainContainer>
      <h1>{planet.name}</h1>
      <h3>{`(${renderNumber(
        planet.population,
        'population',
        'Population Unknown'
      )})`}</h3>
      <Container style={{ flex: 1 }}>
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
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Container style={{ flexGrow: 1 }} title={`People from ${planet.name}`}>
          {renderPeople()}
        </Container>
        <Container title="Films" style={{ flexGrow: 1 }}>
          {renderFilms()}
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
  padding-top: 20px;
`;

export default Planet;
