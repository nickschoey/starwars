import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'nes-react';
import styled from 'styled-components';
import PersonMiniature from './PersonMiniature';

const PeopleContainer = ({ title, peopleIds }) => {
  const people = useSelector(state => state.characters.data);
  const peopleToShow = peopleIds.map(id => people[id]);

  const renderPeople = () => {
    if (peopleToShow.length === 0) {
      return <p style={{ textAlign: 'center' }}>There is no one here...</p>;
    }
    return peopleToShow.map(person => (
      <PersonMiniature key={person.url} name={person.name} id={person.id} />
    ));
  };

  return (
    <OuterContainer dark title={title}>
      <MiniatureContainer>{renderPeople()}</MiniatureContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled(Container)`
  width: 95%;
  padding-bottom: 7px;
`;

const MiniatureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  max-width: 1024px;
`;

PeopleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  peopleIds: PropTypes.array.isRequired
};

export default PeopleContainer;
