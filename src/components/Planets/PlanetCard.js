import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Anchor from '../common/Anchor';

const PlanetCard = ({ planet }) => {
  const history = useHistory();
  const navToPlanet = () => {
    history.push(`/planet/${planet.id}`);
  };
  return (
    <Anchor to={`/planet/${planet.id}`}>
      <PlanetCardContainer>
        <Container>{planet.name}</Container>
      </PlanetCardContainer>
    </Anchor>
  );
};

PlanetCard.propTypes = {
  planet: PropTypes.node.isRequired
};

const PlanetCardContainer = styled.div`
  &:hover {
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png);
  }
`;

export default PlanetCard;
