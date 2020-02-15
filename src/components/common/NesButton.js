import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../helper/constants';

const NesButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  color: ${props =>
    props.primary ? colors.starWarsGreyPrimary : colors.starWarsBlack};
  background-color: ${props =>
    props.primary ? colors.starWarsBluePrimary : colors.starWarsGreyPrimary};

  &::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    box-shadow: inset -4px -4px
      ${props =>
        props.primary ? colors.starWarsBlueShadow : colors.starWarsGreyShadow};
    text-decoration: none;
    background-color: ${props =>
      props.primary ? colors.starWarsBlueHover : colors.starWarsGreyHover};

    &::after {
      box-shadow: inset -6px -6px
        ${props =>
          props.primary
            ? colors.starWarsBlueShadow
            : colors.starWarsGreyShadow};
    }
  }

  &:focus {
    box-shadow: 0 0 0 6px
      rgba(
        ${props =>
          props.primary
            ? colors.starWarsBlueShadow
            : colors.starWarsGreyShadow},
        0.3
      );
  }

  &:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px
      ${props =>
        props.primary ? colors.starWarsBlueShadow : colors.starWarsGreyShadow};
  }
`;

NesButton.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool
};

NesButton.defaultProps = {
  primary: false
};

export default NesButton;
