import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MainContainer } from './Containers';

const CardView = ({ children }) => {
  return (
    <MainContainer>
      <CardContainer>{children}</CardContainer>
    </MainContainer>
  );
};

CardView.propTypes = {
  children: PropTypes.node.isRequired
};

const CardContainer = styled.div`
  z-index: 3;
  margin-top: 10px;
  width: 1024px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default CardView;
