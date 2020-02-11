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
    <Container style={{ flexGrow: 1, width: '95%' }} dark title="Films">
      {films.map(film => (
        <p key={film.url}>
          <Anchor to={`/film/${film.id}`}>{film.title}</Anchor>
        </p>
      ))}
    </Container>
  );
};

FilmsContainer.propTypes = {
  filmIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default FilmsContainer;
