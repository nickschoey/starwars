import React from 'react';
import { Balloon, Sprite } from 'nes-react';
import styled from 'styled-components';
import { colors, device } from '../../helper/constants';

const Github = () => {
  return (
    <BalloonContainer>
      <Balloon
        style={{
          backgroundColor: colors.starWarsBlack,
          textAlign: 'center',
          display: 'flex'
        }}
        fromRight
      >
        <p>
          View the
          <StyledAnchor href="https://github.com/nickschoey/starwars">
            {' '}
            Code
          </StyledAnchor>
        </p>
      </Balloon>
      <Sprite sprite="octocat" style={{ alignSelf: 'flex-end' }} />
    </BalloonContainer>
  );
};

const BalloonContainer = styled.div`
  display: flex;
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 300;
  @media ${device.tablet} {
    display: flex;
  }
`;

const StyledAnchor = styled.div`
  color: ${colors.starWarsYellow};
  text-decoration: none;
  &:hover {
    color: ${colors.starWarsYellowSecondary};
    text-decoration: none;
  }
`;

export default Github;
