import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Radios } from 'nes-react';
import { useHistory } from 'react-router-dom';
import { Sticky } from 'react-sticky';

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
      <Sticky topOffset={250}>
        {({ style }) => (
          <ButtonArray style={style}>
            <Radios
              selectedValue={selectedRadio}
              options={routeOptions}
              onValueChange={navigateToView}
            />
          </ButtonArray>
        )}
      </Sticky>
    </>
  );
};

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 100%;
`;

const ButtonArray = styled.div`
  z-index: 2000;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const TitleArea = styled.div`
  justify-self: center;
  align-self: center;
  color: #ffe81f;
  font-size: 5em;
`;

export default Hero;
