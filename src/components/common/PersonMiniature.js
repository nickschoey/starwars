import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from './Anchor';
import loadImage from '../../helper/importImage';

const PersonMiniature = ({ name, id, withLabel }) => {
  const [image, setImage] = useState('https://via.placeholder.com/100');
  useEffect(() => {
    loadImage(id, setImage);
  }, [id]);

  return (
    <Anchor to={`/character/${id}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        {withLabel && <p>{name}</p>}
      </Wrapper>
    </Anchor>
  );
};

PersonMiniature.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  withLabel: PropTypes.bool
};

PersonMiniature.defaultProps = {
  withLabel: true
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const ImageWrapper = styled.div`
  height: 80px;
  width: 80px;
  padding-bottom: 5px;
`;

const Image = styled.img`
  height: 80px;
  width: auto;
`;

export default PersonMiniature;
