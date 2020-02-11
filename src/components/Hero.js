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
  const [selectedRadio, setselectedRadio] = useState('/');
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.search.text);
  const searchVisible = useSelector(state => state.search.visible);
  const history = useHistory();

  const navigateToView = value => {
    setselectedRadio(value);
    history.push(value);
  };

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
          <StyledRadios>
            <Radios
              selectedValue={selectedRadio}
              options={routeOptions}
              onValueChange={navigateToView}
            />
          </StyledRadios>
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
  font-size: 8px;
  padding-bottom: 5px;
  @media ${device.desktop} {
    font-size: 1rem;
    padding-bottom: 0px;
    display: inline;
  }
`;

const StyledRadios = styled.div`
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
export default Hero;
