import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea,
  Avatar,
  Balloon,
  List,
  Table,
  Progress,
  Icon,
  Sprite,
  ControllerIcon
} from 'nes-react';

const PersonCard = ({ person }) => {
  return <CardFrame title={person.name}></CardFrame>;
};

PersonCard.propTypes = {
  person: PropTypes.objectOf({
    name: PropTypes.string
  }).isRequired
};

const CardFrame = styled(Container)`
  margin: 5px;
  position: relative;
  height: 300px;
  width: 300px;
`;

export default PersonCard;
