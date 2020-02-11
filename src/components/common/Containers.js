import styled from 'styled-components';
import { Container } from 'nes-react';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;
