import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import Anchor from './Anchor';

const FilmsContainer = ({ styling, filmIds }) => {
  const allFilms = state.films.data;
  const films = filmIds.map(id => allFilms[id]);

  return (
    <FilmsNesContainer>
      <Container dark title="Films" style={styling}>
        {films.map(film => (
          <p>
            <Anchor to={`/film/${film.id}`}>{film.title}</Anchor>
          </p>
        ))}
      </Container>
    </FilmsNesContainer>
  );
};

const FilmsNesContainer = styled.div`
  display: flex;
`;

FilmsContainer.propTypes = {
  styling: PropTypes.objectOf({ width: PropTypes.string }).isRequired,
  filmIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default FilmsContainer;
