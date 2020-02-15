import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../helper/constants';
import NesButton from './NesButton';

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <ButtonContainer data-test="component-backButton">
      <NesButton primary onClick={handleClick}>
        {'<- Back'}
      </NesButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  left: 0px;
  font-size: 0.5rem;
  @media ${device.laptopL} {
    font-size: 1rem;
  }
`;

export default BackButton;
