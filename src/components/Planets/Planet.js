import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'nes-react';
import state from '../../data';
import PeopleContainer from '../common/PeopleContainer';

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const Planet = () => {
  const { id } = useParams();
  const planet = state.planets.data[id];
  const films = state.films.data;

  const appearedFilms = planet.films.map(filmsId => films[filmsId]);

  const renderNumber = (data, measure = '', unknownMsg = 'Unknown') => {
    const parsedNumber = parseInt(data, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parsedNumber)) {
      return unknownMsg;
    }
    return `${formatNumber(parsedNumber)}${measure}`;
  };

  const renderFilms = () => {
    return (
      <div>
        {appearedFilms.map(film => (
          <p>{film.title}</p>
        ))}
      </div>
    );
  };

  return (
    <MainContainer>
      <h1>{planet.name}</h1>
      <h3>
        {`(${renderNumber(
          planet.population,
          'population',
          'Population Unknown'
        )})`}
      </h3>
      <div style={{ display: 'flex' }}>
        <Container style={{ width: '650px' }}>
          <p>
            <strong>Rotation Period: </strong>
            {renderNumber(planet.rotation_period, ' hours')}
          </p>
          <p>
            <strong>Orbital Period: </strong>
            {renderNumber(planet.orbital_period, ' days')}
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
        <Container title="Films" style={{ width: '450px' }}>
          {renderFilms()}
        </Container>
      </div>
      <PeopleContainer
        title={`People from ${planet.name}`}
        styling={{ width: '1100px' }}
        peopleIds={planet.residents}
      />
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
