import styled from 'styled-components';
import { Container } from 'nes-react';
import { device, colors } from '../../helper/constants';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
  @media ${device.laptop} {
    min-width: 950px;
    max-width: 1024px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 15rem;
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

export const Yellow = styled.span`
  color: ${colors.starWarsYellow};
`;
