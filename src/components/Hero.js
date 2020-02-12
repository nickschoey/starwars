import React, { useState } from 'react';
import styled from 'styled-components';
import { Radios } from 'nes-react';
import { useHistory } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../actions/search';
import { colors, device } from '../helper/constants';

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
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.search.text);
  const searchVisible = useSelector(state => state.search.visible);

  const handleChange = e => {
    dispatch(changeSearch(e.target.value));
  };
  return (
    <Sticky>
      {({ style }) => (
        <HeroContainer style={style}>
          <PageTitle style={{ justifySelf: 'flex-start' }}>
            The 8 bits Star Wars Catalog
          </PageTitle>
          <StyledInput
            visible={searchVisible}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search"
          />
          <SelectView />
        </HeroContainer>
      )}
    </Sticky>
  );
};

const HeroContainer = styled.div`
  font-size: 1.2rem;
  width: 100vw;
  color: ${colors.starWarsYellow};
  background-color: ${colors.starWarsBlack};
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 4px solid ${colors.starWarsWhite};
  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const PageTitle = styled.div`
  font-size: 0.8rem;
  padding-bottom: 5px;
  text-align: center;
  @media ${device.laptopL} {
    font-size: 1rem;
    padding-bottom: 0px;
    display: inline;
  }
`;

const StyledRadios = styled.div`
  display: flex;
  font-size: 7px;
  padding-top: 10px;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const StyledInput = styled.input`
  justify-self: center;
  max-width: 90%;
  visibility: ${props => (props.visible ? 'unset' : 'hidden')};
  font-size: 0.7rem;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const RadioElement = styled.div`
  color: ${props => {
    return props.view === props.value
      ? colors.starWarsYellow
      : colors.starWarsWhite;
  }};
  padding: 0px 15px;
`;

const SelectView = () => {
  const view = useSelector(state => state.navigation.view);
  const history = useHistory();

  const navigateToView = value => {
    history.push(value);
  };

  return (
    <StyledRadios>
      <RadioElement
        view={view}
        value="people"
        onClick={() => navigateToView('/')}
      >
        People
      </RadioElement>
      <RadioElement
        view={view}
        value="planets"
        onClick={() => navigateToView('/planets')}
      >
        Planets
      </RadioElement>
      <RadioElement
        view={view}
        value="films"
        onClick={() => navigateToView('/films')}
      >
        Films
      </RadioElement>
    </StyledRadios>
  );
};

export default Hero;
