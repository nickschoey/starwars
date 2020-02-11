import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MainContainer } from './Containers';
import { device } from '../../helper/constants';

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 10px;
  @media ${device.laptopL} {
    max-width: 1440px;
  }
`;

export default CardView;
