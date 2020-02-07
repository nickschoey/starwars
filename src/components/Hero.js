import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Radios } from 'nes-react';
import { useHistory } from 'react-router-dom';

const Hero = () => {
  const [selectedRadio, setselectedRadio] = useState('characters');
  const history = useHistory();

  const navigateToView = value => {
    setselectedRadio(value);
    history.push(value);
  };
  return (
    <div style={{ marginBottom: '30px' }}>
      <HeroContainer dark>
        <TitleArea>Star Wars</TitleArea>
      </HeroContainer>
      <ButtonArray>
        <Radios
          selectedValue={selectedRadio}
          options={[
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
          ]}
          onValueChange={navigateToView}
        />
      </ButtonArray>
    </div>
  );
};

Hero.propTypes = {};

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 30vh;
  width: 100%;
`;
const ButtonArray = styled.div`
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
