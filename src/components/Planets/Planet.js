import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PeopleContainer from '../common/PeopleContainer';
import FilmsContainer from '../common/FilmsContainer';
import renderNumber from '../../helper/renderNumber';
import { disableVisible } from '../../actions/search';
import { MainContainer, Root } from '../common/Containers';
import { device } from '../../helper/constants';
import BackButton from '../common/BackButton';
import { changeView } from '../../actions/navigation';
import capitalize from '../../helper/capitalize';
import useTopScroll from '../../helper/useTopScroll';
import ElementTitle from '../common/ElementTitle';
import NesContainer from '../common/NesContainer';

const Planet = () => {
  useTopScroll();
  const { id } = useParams();
  const dispatch = useDispatch();
  const planet = useSelector(state => state.planets.data[id]);

  useEffect(() => {
    dispatch(disableVisible());
    dispatch(changeView('planets'));
  }, [dispatch]);

  return (
    <Root>
      <BackButton />
      <MainContainer>
        <ElementTitle>{planet.name}</ElementTitle>
        <h3 style={{ textAlign: 'center' }}>
          {`(${renderNumber(
            planet.population,
            ' inhabitants',
            'Population Unknown'
          )})`}
        </h3>
        <DataContainer>
          <NesContainer style={{ width: '95%' }} title="Data">
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
              {`${capitalize(planet.climate)}`}
            </p>
            <p>
              <strong>Gravity: </strong>
              {`${planet.gravity}`}
            </p>
            <p>
              <strong>Terrain: </strong>
              {`${capitalize(planet.terrain)}`}
            </p>
            <p>
              <strong>Surface Water: </strong>
              {renderNumber(planet.surface_water, '%')}
            </p>
          </NesContainer>
          <FilmsContainer filmIds={planet.films} />
        </DataContainer>
        <PeopleContainer
          title={`Characters from ${planet.name}`}
          peopleIds={planet.residents}
        />
      </MainContainer>
    </Root>
  );
};

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding-bottom: 12px;
  @media ${device.laptop} {
    align-items: stretch;
    flex-direction: row;
  }
`;

export default Planet;
