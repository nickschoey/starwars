import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';

const romanNumerals = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII'
};

const FilmCard = ({ film }) => {
  const renderTitle = () => {
    return `${romanNumerals[film.episode_id]} ${film.title}`;
  };

  return <FilmCardContainer dark>{renderTitle()}</FilmCardContainer>;
};

FilmCard.propTypes = {};

const FilmCardContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #ffe81f;
  height: 200px;
  width: 100%;
  &:hover {
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png);
  }
`;

export default FilmCard;
