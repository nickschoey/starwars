import styled from 'styled-components';
import { Container } from 'nes-react';
import { device } from '../../helper/constants';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-bottom: 12px;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const ImageContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;
