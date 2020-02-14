import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import Anchor from './Anchor';

const FilmsContainer = ({ filmIds }) => {
  const allFilms = useSelector(state => state.films.data);
  const films = filmIds.map(id => allFilms[id]);

  const renderFilms = () => {
    if (films.length === 0) {
      return <p style={{ textAlign: 'center' }}>No films happen here...</p>;
    }
    return films.map(film => (
      <p key={film.url}>
        <Anchor to={`/film/${film.id}`}>{film.title}</Anchor>
      </p>
    ));
  };

  return (
    <StyledContainer dark title="Films">
      {renderFilms()}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  flex-grow: 1;
  width: 95%;
`;

FilmsContainer.propTypes = {
  filmIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default FilmsContainer;
