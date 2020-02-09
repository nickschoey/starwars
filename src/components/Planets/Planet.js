import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'nes-react';
import state from '../../data';
import PeopleContainer from '../common/PeopleContainer';
import FilmsContainer from '../common/FilmsContainer';
import renderNumber from '../../helper/renderNumber';
import { disableVisible } from '../../actions/search';

const Planet = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const planet = state.planets.data[id];

  useEffect(() => {
    dispatch(disableVisible());
  }, [dispatch]);

  return (
    <MainContainer>
      <h1>{planet.name}</h1>
      <h3>
        {`(${renderNumber(
          planet.population,
          ' inhabitants',
          'Population Unknown'
        )})`}
      </h3>
      <div style={{ display: 'flex' }}>
        <Container dark style={{ width: '650px' }}>
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
        <FilmsContainer styling={{ width: '450px' }} filmIds={planet.films} />
      </div>
      <PeopleContainer
        title={`Characters from ${planet.name}`}
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
