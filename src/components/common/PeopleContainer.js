import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import PersonMiniature from './PersonMiniature';
import state from '../../data';

const PeopleContainer = ({ title, peopleIds }) => {
  const people = state.characters.data;
  const peopleToShow = peopleIds.map(id => people[id]);

  const renderPeople = () => {
    return peopleToShow.map(person => (
      <PersonMiniature key={person.url} name={person.name} id={person.id} />
    ));
  };

  return (
    <Container style={{ width: '95%' }} dark title={title}>
      <MiniatureContainer>{renderPeople()}</MiniatureContainer>
    </Container>
  );
};

PeopleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  peopleIds: PropTypes.array.isRequired
};

const MiniatureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  max-width: 1024px;
`;

export default PeopleContainer;
