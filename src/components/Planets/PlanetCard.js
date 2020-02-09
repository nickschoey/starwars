import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import Anchor from '../common/Anchor';
import styled from 'styled-components';

const PlanetCard = ({ planet }) => {
  return (
    <Anchor to={`/planet/${planet.id}`}>
      <PlanetContainer dark>{planet.name}</PlanetContainer>
    </Anchor>
  );
};

const PlanetContainer = styled(Container)`
  &:hover {
    color: #ffe81f;
  }
`;

PlanetCard.propTypes = {
  planet: PropTypes.node.isRequired
};

export default PlanetCard;
