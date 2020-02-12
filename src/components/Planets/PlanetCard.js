import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import Anchor from '../common/Anchor';
import { colors } from '../../helper/constants';

const PlanetCard = ({ planet }) => {
  return (
    <Anchor to={`/planet/${planet.id}`}>
      <PlanetContainer dark>{planet.name}</PlanetContainer>
    </Anchor>
  );
};

const PlanetContainer = styled(Container)`
  &:hover {
    color: ${colors.starWarsYellow};
  }
`;

PlanetCard.propTypes = {
  planet: PropTypes.object.isRequired
};

export default PlanetCard;
