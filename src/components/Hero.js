import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Radios } from 'nes-react';
import { useHistory } from 'react-router-dom';

const routeOptions = [
  {
    value: '/',
    label: 'People'
  },
  {
    value: '/planets',
    label: 'Planets'
  },
  {
    value: '/films',
    label: 'Films'
  }
];

const Hero = () => {
  const [selectedRadio, setselectedRadio] = useState('/');
  const history = useHistory();

  const navigateToView = value => {
    setselectedRadio(value);
    history.push(value);
  };
  return (
    <>
      <HeroContainer dark>
        <TitleArea>Star Wars</TitleArea>
      </HeroContainer>
      <ButtonArray>
        <Radios
          selectedValue={selectedRadio}
          options={routeOptions}
          onValueChange={navigateToView}
        />
      </ButtonArray>
    </>
  );
};

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 30vh;
  width: 100%;
`;
const ButtonArray = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 15px;
`;

const TitleArea = styled.div`
  justify-self: center;
  align-self: center;
  color: #ffe81f;
  font-size: 5em;
`;

export default Hero;
