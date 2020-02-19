import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import yoda from '../assets/20.png';
import { disableVisible } from '../actions/search';

const Page404 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableVisible());
  }, []);
  return (
    <ErrorContainer>
      <h2>Here nothing seems to be...</h2>
      <img src={yoda} alt="Not found error" />
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Page404;
