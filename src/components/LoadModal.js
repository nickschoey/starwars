import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Progress } from 'nes-react';
import styled from 'styled-components';
import capitalize from '../helper/capitalize';
import { Yellow } from './common/Containers';
import NesContainer from './common/NesContainer';

export default () => {
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
        <ProgressBar
          tag={capitalize(tag)}
          value={0}
          startMessage="Counting"
          endMessage="in the galaxy..."
        />
      );
    }
    if (pending) {
      return (
        <ProgressBar
          tag={capitalize(tag)}
          value={50}
          startMessage="Counting"
          endMessage="in the galaxy..."
          primary
        />
      );
    }
    return (
      <ProgressBar
        tag={`${elementsFound} ${capitalize(tag)}`}
        value={100}
        primary
        startMessage="Found"
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
        {renderProgress(characters, 'people')}
        {renderProgress(films, 'films')}
        {renderProgress(planets, 'planets')}
        {renderProgress(species, 'species')}
        {renderProgress(starships, 'starships')}
        {renderProgress(vehicles, 'vehicles')}
      </NesContainer>
    </LoadScreen>
  );
};

const ProgressBar = ({ tag, value, primary, startMessage, endMessage }) => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <div>
        <span>{startMessage}</span>
        <Yellow>{` ${tag} `}</Yellow>
        <span>{endMessage}</span>
      </div>
      <Progress value={value} max={100} primary={primary} />
    </div>
  );
};

const LoadScreen = styled.div`
  position: absolute;
  z-index: 50000;
  width: 100vw;
`;

ProgressBar.propTypes = {
  tag: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  primary: PropTypes.bool,
  startMessage: PropTypes.string.isRequired,
  endMessage: PropTypes.string
};

ProgressBar.defaultProps = {
  primary: false,
  endMessage: ''
};
