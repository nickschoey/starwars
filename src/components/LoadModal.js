import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import capitalize from '../helper/capitalize';
import { Yellow } from './common/Containers';
import NesContainer from './common/NesContainer';

const LoadModal = () => {
  const characters = useSelector(state => state.characters);
  const films = useSelector(state => state.films);
  const planets = useSelector(state => state.planets);
  const species = useSelector(state => state.species);
  const starships = useSelector(state => state.starships);
  const vehicles = useSelector(state => state.vehicles);

  const renderProgress = (state, tag) => {
    const { data, pending } = state;
    const elementsFound = Object.keys(data).length;
    if (pending === null) {
      return (
        <Progress
          tag={capitalize(tag)}
          value={0}
          startMessage="Counting"
          endMessage=" in the galaxy..."
        />
      );
    }
    if (pending) {
      return (
        <Progress
          tag={capitalize(tag)}
          value={50}
          startMessage="Counting"
          endMessage=" in the galaxy..."
        />
      );
    }
    return (
      <Progress
        tag={`${elementsFound} ${capitalize(tag)}`}
        value={100}
        startMessage="Found"
        endMessage="!"
      />
    );
  };
  return (
    <LoadScreen>
      <NesContainer>
        <div style={{ textAlign: 'center' }}>
          <p>
            Welcome to The 8 bits
            <Yellow> Star Wars </Yellow>
            catalogue!
          </p>

          <p>Give us a sec while we fetch all the needed data!</p>
        </div>
        <ProgressContainer>
          {renderProgress(characters, 'people')}
          {renderProgress(films, 'films')}
          {renderProgress(planets, 'planets')}
          {renderProgress(species, 'species')}
          {renderProgress(starships, 'starships')}
          {renderProgress(vehicles, 'vehicles')}
        </ProgressContainer>
      </NesContainer>
    </LoadScreen>
  );
};

const Progress = ({ tag, startMessage, endMessage }) => {
  return (
    <p style={{ paddingTop: '10px' }}>
      <span>{startMessage}</span>
      <Yellow>{` ${tag}`}</Yellow>
      <span>{endMessage}</span>
    </p>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadScreen = styled.div`
  position: absolute;
  z-index: 50000;
  width: 100vw;
`;

Progress.propTypes = {
  tag: PropTypes.string.isRequired,
  startMessage: PropTypes.string.isRequired,
  endMessage: PropTypes.string
};

Progress.defaultProps = {
  endMessage: ''
};

export default LoadModal;
