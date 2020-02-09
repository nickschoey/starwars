import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'nes-react';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';

const PersonCard = ({ person }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage(person.id, setImage);
  }, []);

  return (
    <CardContainer>
      <Anchor to={`/character/${person.id}`}>
        <CardFrame dark rounded title={person.name}>
          <CardContent>
            <Image src={image} alt={person.name} />
          </CardContent>
        </CardFrame>
      </Anchor>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 5px;
`;

const CardFrame = styled(Container)`
  height: 240px;
  width: 240px;
`;
const CardContent = styled.div`
  position: absolute;
  bottom: 15px;
  z-index: -1;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

PersonCard.propTypes = {
  person: PropTypes.objectOf({
    name: PropTypes.string,
    mass: PropTypes.string
  }).isRequired
};

export default PersonCard;
