import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'nes-react';

const PersonCard = ({ person }) => {
  return (
    <CardFrame title={person.name}>
      <CardContent>
        <img src="https://via.placeholder.com/250" alt={person.name} />
      </CardContent>
    </CardFrame>
  );
};

PersonCard.propTypes = {
  person: PropTypes.objectOf({
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

export default PersonCard;
