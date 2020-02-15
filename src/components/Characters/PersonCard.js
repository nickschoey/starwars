import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';
import { device, colors } from '../../helper/constants';
import NesContainer from '../common/NesContainer';

const PersonCard = ({ person }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage(person.id, setImage);
  }, [person.id]);

  return (
    <CardContainer>
      <Anchor
        to={`/character/${person.id}`}
        color={colors.starWarsWhite}
        hoverColor={colors.starWarsYellow}
      >
        <CardFrame title={person.name} titleSize="0.6rem">
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

const CardFrame = styled(NesContainer)`
  display: flex;
  height: 190px;
  width: 190px;
  margin: 7px;
  &:hover {
    box-shadow: 6px 0 ${colors.starWarsYellow}, -6px 0 ${colors.starWarsYellow},
      0 -6px ${colors.starWarsYellow}, 0 6px ${colors.starWarsYellow};
  }
  @media ${device.tablet} {
    height: 220px;
    width: 220px;
  }
`;
const CardContent = styled.div`
  position: absolute;
  bottom: 13px;
  right: -5px;
  z-index: -1;
`;

const Image = styled.img`
  height: auto;
  width: 95%;
`;

PersonCard.propTypes = {
  person: PropTypes.object.isRequired
};

export default PersonCard;
