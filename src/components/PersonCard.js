import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Container } from 'nes-react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { planets } from '../data';
const Card = ({ person, planet }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>{`Name: ${person.name}`}</p>
    <p>{`Birth: ${person.birth_year}`}</p>
    <p>{`Gender: ${person.gender}`}</p>
    <p>{`Homeworld: ${planet.name}`}</p>
    <p>{`Height: ${person.height}cm`}</p>
    <p>{`Mass: ${person.mass}kg`}</p>
  </div>
);

const PersonCard = ({ person }) => {
  const history = useHistory();
  const planet = planets.data[person.homeworld];
  // const planet = useSelector(state => state.planets.data[person.homeworld]);
  const navToPerson = () => {
    history.push(`/character/1`);
  };

  return (
    <Popup
      on="hover"
      position="right center"
      trigger={
        <div>
          <CardFrame title={person.name} onClick={navToPerson}>
            <CardContent>
              <img src="https://via.placeholder.com/250" alt={person.name} />
            </CardContent>
          </CardFrame>
        </div>
      }
    >
      <Card person={person} planet={planet} />
    </Popup>
  );
};

PersonCard.propTypes = {
  person: PropTypes.objectOf({
    name: PropTypes.string,
    mass: PropTypes.string
  }).isRequired
};

const CardFrame = styled(Container)`
  height: 300px;
  width: 300px;
`;
const CardContent = styled.div`
  position: absolute;
  bottom: 15px;
  right: 25px;
  z-index: -1;
`;

export default PersonCard;
