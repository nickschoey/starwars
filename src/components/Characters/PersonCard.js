import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Container } from 'nes-react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import state from '../../data';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';

const PersonCard = ({ person }) => {
  const [image, setImage] = useState('https://via.placeholder.com/250');
  const history = useHistory();
  const planet = state.planets.data[person.homeworld];
  // const planet = useSelector(state => state.planets.data[person.homeworld]);
  useEffect(() => {
    loadImage(person.id, setImage);
  }, []);

  const navToPerson = () => {
    history.push(`/character/${person.id}`);
  };

  return (
    <Popup
      on="hover"
      position="right center"
      trigger={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <div style={{ padding: '5px' }}>
          <CardFrame rounded title={person.name} onClick={navToPerson}>
            <CardContent>
              <img
                style={{ height: 'auto', width: '100%' }}
                src={image}
                alt={person.name}
              />
            </CardContent>
          </CardFrame>
        </div>
      }
    >
      <Tooltip person={person} planet={planet} />
    </Popup>
  );
};

const Tooltip = ({ person, planet }) => (
  <TooltipContainer style={{ display: 'flex', flexDirection: 'column' }}>
    <p>{`Name: ${person.name}`}</p>
    <p>{`Birth: ${person.birth_year}`}</p>
    <p>{`Gender: ${person.gender}`}</p>
    <p>
      {`Homeworld: `}
      <Anchor to={`planet/${planet.id}`}>{`${planet.name}`}</Anchor>
    </p>
    <p>{`Height: ${person.height}cm`}</p>
    <p>{`Mass: ${person.mass}kg`}</p>
  </TooltipContainer>
);

PersonCard.propTypes = {
  person: PropTypes.objectOf({
    name: PropTypes.string,
    mass: PropTypes.string
  }).isRequired
};
Tooltip.propTypes = {
  person: PropTypes.objectOf({
    name: PropTypes.string,
    mass: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string
  }).isRequired,
  planet: PropTypes.objectOf({
    name: PropTypes.string
  }).isRequired
};

const CardFrame = styled(Container)`
  height: 300px;
  width: 300px;
`;
const CardContent = styled.div`
  background-color: #212529;
  position: absolute;
  bottom: 15px;
  z-index: -1;
`;

const TooltipContainer = styled(Container)`
  background-color: white;
  border: 5px solid black;
  border-radius: 3px;
  width: 400px;
`;
export default PersonCard;
