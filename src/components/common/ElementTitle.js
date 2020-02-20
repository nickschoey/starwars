import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ElementTitle = ({ children }) => {
  return (
    <TitleContainer>
      <Title>{children}</Title>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  margin-top: 1.5rem;
  width: 80%;
`;

const Title = styled.h2`
  text-align: center;
`;

ElementTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default ElementTitle;
