import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import PersonMiniature from './PersonMiniature';
import state from '../../data';

const PeopleContainer = ({ title, styling, peopleIds }) => {
  const people = state.characters.data;
  const peopleToShow = peopleIds.map(id => people[id]);

  const renderPeople = () => {
    return peopleToShow.map(person => (
      <PersonMiniature key={person.url} name={person.name} id={person.id} />
    ));
  };

  return (
    <Container dark title={title} style={styling}>
      <MiniatureContainer
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {renderPeople()}
      </MiniatureContainer>
    </Container>
  );
};

PeopleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  styling: PropTypes.objectOf({ width: PropTypes.string }).isRequired,
  peopleIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

const MiniatureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default PeopleContainer;
