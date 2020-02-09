import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import Anchor from '../common/Anchor';

const PlanetCard = ({ planet }) => {
  return (
    <Anchor to={`/planet/${planet.id}`}>
      <Container>{planet.name}</Container>
    </Anchor>
  );
};

PlanetCard.propTypes = {
  planet: PropTypes.node.isRequired
};

export default PlanetCard;
