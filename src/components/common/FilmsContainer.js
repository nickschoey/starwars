import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import Anchor from './Anchor';

const FilmsContainer = ({ filmIds }) => {
  const allFilms = state.films.data;
  const films = filmIds.map(id => allFilms[id]);

  return (
    <FilmsNesContainer>
      <Container style={{ flexGrow: 1 }} dark title="Films">
        {films.map(film => (
          <p key={film.url}>
            <Anchor to={`/film/${film.id}`}>{film.title}</Anchor>
          </p>
        ))}
      </Container>
    </FilmsNesContainer>
  );
};

const FilmsNesContainer = styled.div`
  margin: 5px;
  display: flex;
  width: 95%;
`;

FilmsContainer.propTypes = {
  filmIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default FilmsContainer;
