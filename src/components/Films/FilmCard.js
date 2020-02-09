import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import Anchor from '../common/Anchor';
import romanNumerals from '../../helper/romanNumerals';

const FilmCard = ({ film }) => {
  return (
    <FilmCardContainer>
      <Anchor to={`/film/${film.id}`}>
        <InnerContainer dark>
          <BigText>{`${romanNumerals[film.episode_id]} ${film.title}`}</BigText>
        </InnerContainer>
      </Anchor>
    </FilmCardContainer>
  );
};

const FilmCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  height: 200px;
  width: 100%;
`;

const InnerContainer = styled(Container)`
  flex-grow: 1;
  height: 100%;
`;

const BigText = styled.div`
  font-size: 35px;
  color: #ffe81f;
`;

FilmCard.propTypes = {
  film: PropTypes.objectOf({
    episode_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default FilmCard;
