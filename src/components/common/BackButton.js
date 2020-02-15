import React from 'react';
import { Button } from 'nes-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../helper/constants';

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <ButtonContainer data-test="component-backButton">
      <Button primary onClick={handleClick}>
        {'<- Back'}
      </Button>
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
