import React, { useState } from 'react';
import styled from 'styled-components';
import { Radios } from 'nes-react';
import { useHistory } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../actions/search';

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
        <ButtonArray style={style}>
          <div style={{ justifySelf: 'flex-start' }}>
            The 8 bits Star Wars Catalog
          </div>
          <div>
            <StyledInput
              visible={searchVisible}
              value={searchValue}
              onChange={handleChange}
              placeholder="Search"
            />
          </div>
          <StyledRadios
            selectedValue={selectedRadio}
            options={routeOptions}
            onValueChange={navigateToView}
          />
        </ButtonArray>
      )}
    </Sticky>
  );
};

const ButtonArray = styled.div`
  font-size: 1.2rem;
  color: #ffe81f;
  background-color: #212529;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 3rem;
  border-bottom: 4px solid #fafafa;
`;

const StyledRadios = styled(Radios)``;

const StyledInput = styled.input`
  visibility: ${props => (props.visible ? 'unset' : 'hidden')};
`;
export default Hero;
