import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-top: 10px;
  width: 1024px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default CardView;