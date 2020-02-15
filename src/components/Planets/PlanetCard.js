import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../common/Anchor';
import { colors } from '../../helper/constants';
import NesContainer from '../common/NesContainer';

const PlanetCard = ({ planet }) => {
  return (
    <Anchor
      to={`/planet/${planet.id}`}
      color={colors.starWarsWhite}
      hoverColor={colors.starWarsYellow}
    >
      <PlanetContainer dark>{planet.name}</PlanetContainer>
    </Anchor>
  );
};

const PlanetContainer = styled(NesContainer)`
  &:hover {
    border-color: ${colors.starWarsYellow};
  }
`;

PlanetCard.propTypes = {
  planet: PropTypes.object.isRequired
};

export default PlanetCard;
