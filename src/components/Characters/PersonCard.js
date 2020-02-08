import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Container } from 'nes-react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import state from '../../data';
import Anchor from '../common/Anchor';

const PersonCard = ({ person }) => {
  const history = useHistory();
  const planet = state.planets.data[person.homeworld];
  // const planet = useSelector(state => state.planets.data[person.homeworld]);
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
              <img src="https://via.placeholder.com/250" alt={person.name} />
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
      <Anchor to={`planets/${planet.id}`}>{`${planet.name}`}</Anchor>
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
  position: absolute;
  bottom: 15px;
  right: 25px;
  z-index: -1;
`;

const TooltipContainer = styled(Container)`
  background-color: white;
  border: 5px solid black;
  border-radius: 3px;
  width: 400px;
`;
export default PersonCard;
