import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';

const PlanetCard = ({ planet }) => {
  return (
    <PlanetCardContainer>
      <Container>{planet.name}</Container>
    </PlanetCardContainer>
  );
};

PlanetCard.propTypes = {};

const PlanetCardContainer = styled.div`
  &:hover {
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png);
  }
`;

export default PlanetCard;
